const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const app = express();
const PORT = process.env.PORT || 3000;

const prisma = new PrismaClient();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json())

//returns all coffees
app.get("/coffee", async(req, res) => {
    try{
        const coffees = await prisma.coffee.findMany();

        res.json(coffees);
    }catch(error){
        res.status(500).json({error: "Internal Server Error"})
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})