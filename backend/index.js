const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const { clerkClient} = require('@clerk/clerk-sdk-node');
const { requireAuth } = require('@clerk/express')
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

    const user = await prisma.user.findUnique({
        where: {
            clerkId: req.auth.userId,
        },
    });

    const address = await prisma.address.upsert({
        where: { userId: user.id },
        update: {
            line1,
            line2,
            city,
            postcode,
            county,
            country,
        },
        create: {
            line1,
            line2,
            city,
            postcode,
            county,
            country,
            userId: user.id,
        },
    })

    await prisma.user.update({
        where: {
            id: user.id,
        },
        data: {
            addressId: address.id,
        },
    });

    return res.status(201).json({message: "Address added successfully", address});
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})