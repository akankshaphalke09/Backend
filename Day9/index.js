const express=require('express');
const app=express();
const PORT=3000;

app.use(express.json())


app.get('/tshirt',(req,res)=>{
    res.status(200).send({tshirt:"available",sizes:["S","M","L","XL"]});
} )

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;

    // 1. Safety Guard: Check if body exists to prevent crashing
    if (!req.body) {
        return res.status(400).send({ error: "no body provided" });
    }

    const { size } = req.body;
   
    // 2. Your custom error message
    if (!size) {
        return res.status(400).send({ error: "no size is required" });
    }

    res.send({
        message: `T-shirt with ID ${id} and size ${size} added to cart!`,
        status: "success"
    });
});