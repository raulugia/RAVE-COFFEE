const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const { clerkClient} = require('@clerk/clerk-sdk-node');
const { requireAuth } = require('@clerk/express')
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const app = express();
const PORT = process.env.PORT || 3000;

const prisma = new PrismaClient();

const { CLERK_SECRET_KEY } = process.env;

if (!CLERK_SECRET_KEY) {
    console.error("CLERK_SECRET_KEY is missing. Please add it to your environment variables.");
    process.exit(1);
}

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json())

//returns all coffees
app.get("/coffee", async(req, res) => {
    try{
        const coffees = await prisma.coffee.findMany();

        return res.json(coffees);
    }catch(error){
        res.status(500).json({error: "Internal Server Error"})
    }
})

//returns all equipments
app.get("/equipment", async(req, res) => {
    try{
        const equipment = await prisma.equipment.findMany();

        return res.json(equipment);
    }catch(error){
        res.status(500).json({error: "Internal Server Error"})
    }
})

app.post("/register", async(req, res) => {
    const { first_name, last_name, email, password } = req.body;
  
    try{
        const clerkUser = await clerkClient.users.createUser({
            emailAddress: [email],
            password,
            firstName: first_name,
            lastName: last_name,
        })


        const user = await prisma.user.create({
            data: {
                name: first_name,
                surname: last_name,
                email,
            }
        })

        return res.status(201).json({message: "User registered successfully"});
        
    }catch(error){
        if (error.code === "P2002") {
            return res.status(409).json({ error: "A user with this email already exists." });
        }
     
        console.log(error)
        res.status(500).json({ error: "Internal server error." })
    }
})

//returns user's account details
app.get("/account/details", requireAuth(), async(req, res) => {
    try{
        console.log("here")
        const user = await prisma.user.findUnique({
            where: {
                clerkId: req.auth.userId,
            },
            select: {
                name: true,
                surname: true,
                email: true,
                address: {
                    select: {
                        line1: true,
                        line2: true,
                        city: true,
                        postcode: true,
                        county: true,
                        country: true,
                    }
                } 
            }
        })

        return res.status(200).json(user);
    }catch(error){
        console.log(error)
        res.status(500).json({ error: "Internal server error." })
    }
})

//add address
app.post("/account/add-address", requireAuth(), async(req, res) => {
    const { line1, line2, city, postcode, county, country } = req.body;

    if(!line1 || !city || !postcode || !county || !country){
        return res.status(400).json({ error: "All fields are required." });
    }
    try{
        const user = await prisma.user.findUnique({
            where: {
                clerkId: req.auth.userId,
            },
        });

        if (!user) {
            return res.status(404).json({ error: "User not found." });
        }

        //Check if an address with the same details already exists
        const existingAddress = await prisma.address.findFirst({
            where: {
                line1,
                line2,
                city,
                postcode,
                county,
                country,
            },
        });

        let address;

        if (existingAddress) {
            address = existingAddress;
        } else {
            address = await prisma.address.create({
                data: {
                    line1,
                    line2,
                    city,
                    postcode,
                    county,
                    country,
                },
            });
        }

        await prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                addressId: address.id,
            },
        });

        return res.status(201).json({message: "Address added successfully", address});
    }catch(error){
        console.log(error)
        res.status(500).json({ error: "Internal server error." })
    }
})

// Update or Add Address
app.put("/account/update-address", requireAuth(), async (req, res) => {
    const { line1, line2, city, postcode, county, country } = req.body;

    // Validate the required fields
    if (!line1 || !city || !postcode || !county || !country) {
        return res.status(400).json({ error: "All fields are required." });
    }

    // Find the authenticated user
    const user = await prisma.user.findUnique({
        where: {
            clerkId: req.auth.userId,
        },
    });

    if (!user) {
        return res.status(404).json({ error: "User not found." });
    }

    try {
        const existingAddress = await prisma.address.findFirst({
            where: {
                line1,
                line2,
                city,
                postcode,
                county,
                country,
            },
        });

        let address;

        if (existingAddress) {
            address = existingAddress;
        } else {
            address = await prisma.address.create({
                data: {
                    line1,
                    line2,
                    city,
                    postcode,
                    county,
                    country,
                },
            });
        }

        await prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                addressId: address.id,
            },
        });

        return res.status(200).json({ message: "Address updated successfully", address });
    } catch (error) {
        console.error("Error updating address:", error);
        return res.status(500).json({ error: "An error occurred while updating the address." });
    }
});

app.post("/create-payment-intent", requireAuth(), async(req, res) => {
    const { amount } = req.body

    try{
        const amountInPence = Math.round(amount * 100);
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amountInPence,
            currency: 'gbp',
            automatic_payment_methods: {
              enabled: true,
            },
          });
          console.log(paymentIntent.client_secret)
        return res.status(200).json({ clientSecret: paymentIntent.client_secret });
    }catch(error){
        console.error("Error creating Payment Intent:", error.message);
        res.status(500).json({ error: error.message });
    }
})

app.post("/create-order", requireAuth(), async(req, res) => {
    const { paymentIntentId, total, basket, deliveryTotal} = req.body

    try{
        const user = await prisma.user.findUnique({
            where: {
                clerkId: req.auth.userId,
            },
        })

        if(!user){
            return res.status(404).json({ error: "User not found." });
        }

        const coffees = basket.filter(item => item.type === "coffee").map(item => ({
            coffeeId: item.id,
            quantity: item.quantity,
        }))
        const equipments = basket.filter(item => item.type === "equipment").map(item => ({
            equipmentId: item.id,
            quantity: item.quantity,
        }))

        const order = await prisma.order.create({
            data: {
                customerId: user.id,
                total,
                deliveryTotal,
                stripeId: paymentIntentId,
                orderCoffees: {
                    create: coffees.map((item) => ({
                        coffeeId: item.coffeeId,
                        quantity: item.quantity,
                    })),
                  },
                  orderEquipments: {
                    create: equipments.map((item) => ({
                        equipmentId: item.equipmentId,
                        quantity: item.quantity,
                    })),
                  },
                },
            include: {
                orderCoffees: true,
                orderEquipments: true,
            },
        })

        return res.status(201).json({ message: "Order created successfully", order });
    }catch(error){
        console.log(error)
    }
})

app.get("/orders", requireAuth(), async(req, res) => {
    try{
        const user = await prisma.user.findUnique({
            where: {
                clerkId: req.auth.userId,
            },
        })

        if(!user){
            return res.status(404).json({ error: "User not found." });
        }

        const orders = await prisma.order.findMany({
            where: {
                customerId: user.id,
            },
            include: {
                coffees: true,
                equipments: true,
            }
        })

        return res.status(200).json(orders);
    }catch(error){
        console.log(error)
    }
})

app.get("/recent-orders", requireAuth(), async(req, res) => {
    try{
        const user = await prisma.user.findUnique({
            where: {
                clerkId: req.auth.userId,
            }
        })
    
        if(!user){
            return res.status(404).json({error: "User not found"})
        }
    
        const orders = await prisma.order.findMany({
            where: {
                customerId: user.id,
            },
            orderBy: {
                createdAt: "desc"
            },
            take: 3,
            include: {
                orderCoffees: {
                    include: {
                        coffee: true
                    }
                },
                orderEquipments: true
            }
        })
        console.log(orders)
        return res.json(orders)
    }catch(error){
        res.status(500).json({ error: error.message });
    }
})


app.get("/item/:id", async(req, res) => {
    const { id } = req.params
    const { type } = req.query

    if((!id) || !type){
        return res.status(400).json({ error: "All fields are required" });
    }

    try{
        let item

        if(type === "coffee"){
            item = await prisma.coffee.findFirst({
                 where: {
                     id: parseInt(id)
                 },
                 include: {
                     reviews: true
                 }
             })
        }else{
            item = await prisma.equipment.findFirst({
                where: {
                    id: parseInt(id)
                }
            })
        }

        if(!item){
            return res.status(404).json({ error: "Item not found." });
        }

        if(item.reviews.length > 1){
            const totalRatings = item.reviews.reduce((acc, review) => acc + review.rating, 0)
            const ratingAvrg = totalRatings / item.reviews.length
            
            item.averageRating = ratingAvrg.toFixed(1)
        }

        return res.json({item})
    }catch(error){
        return res.status(500).json({ error: "Internal server error"})
    }
})

app.get("/item/:id/authenticated", requireAuth(), async (req, res) => {
    const { id } = req.params;
    const { type } = req.query;

    if (!id || !type) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const user = await prisma.user.findUnique({
            where: {
                clerkId: req.auth.userId,
            },
        });

        if (!user) {
            return res.status(404).json({ error: "User not found." });
        }

        let item
        if(type === "coffee"){
            item = await prisma.coffee.findFirst({
                 where: {
                     id: parseInt(id)
                 },
                 include: {
                     reviews: true
                 }
             })
        }else{
            item = await prisma.equipment.findFirst({
                where: {
                    id: parseInt(id)
                }
            })
        }

        if(!item){
            return res.status(404).json({ error: "Item not found." });
        }

        if(item.reviews.length > 1){
            const totalRatings = item.reviews.reduce((acc, review) => acc + review.rating, 0)
            const ratingAvrg = totalRatings / item.reviews.length
            
            item.averageRating = ratingAvrg.toFixed(1)
        }

        const hasPurchasedAndNotReviewed = await prisma.orderCoffee.findFirst({
            where: {
              coffeeId: parseInt(id),
              order: {
                customerId: user.id,
              },
              coffee: {
                reviews: {
                  none: {
                    userId: user.id,
                  },
                },
              },
            },
          });

        return res.json({ pendingReview: hasPurchasedAndNotReviewed ? true : false, item, })
    } catch (error) {
        console.error("Error:", error)
        return res.status(500).json({ error: "Internal server error" });
    }
});

app.get("/carousel", async(req, res) => {
    const { type } = req.query

    if(!type){
        return res.status(400).json({ error: "Type field is required" });
    }

    try{
        if(type === "coffee"){
            const coffees = await prisma.coffee.findMany({
                take: 6
            })
            console.log(coffees)

            return res.json(coffees)
        }else if(type === "equipment"){
            const equipments = await prisma.equipment.findMany({
                take: 6
            })

            return res.json(equipments)
        }
    }catch(error){
        return res.status(500).json({ error: "Internal server error" });
    }
})

app.post("/add-review", requireAuth(), async(req, res) => {
    const { itemId, type, rating, text } = req.body

    if(!itemId || !type || !rating || !text){
        return res.status(400).json({ error: "All fields are required" });
    }

    if(rating < 1 || rating > 5){
        return res.status(400).json({ error: "Rating must be between 1 and 5" });
    }
    
    try{
        const user = await prisma.user.findUnique({
            where: {
                clerkId: req.auth.userId,
            },
        })

        if(!user){
            return res.status(404).json({ error: "User not found." });
        }

        let review
        if(type === "coffee"){
            review = await prisma.review.create({
                data: {
                    userId: user.id,
                    coffeeId: parseInt(itemId),
                    rating,
                    review: text,
                }
            })
        }else{
            review = await prisma.review.create({
                data: {
                    userId: user.id,
                    equipmentId: parseInt(itemId),
                    rating,
                    review: text,
                }
            })
        }

        return res.json({message: "Review added successfully", review})
    }catch(error){
        console.error("Error adding review:", error);
        return res.status(500).json({ error: "An error occurred while adding the review." });
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})