const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const PORT = process.env.PORT || 3000;

const prisma = new PrismaClient();

app.use(express.json())

//returns all coffees
app.get("/coffee", (req, res) => {
    try{
        const coffees = prisma.coffee.findMany();

        res.json(coffees);
    }catch(error){
        res.status(500),json({error: "Internal Server Error"})
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})