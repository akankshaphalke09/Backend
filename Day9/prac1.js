const express = require('express');
const app = express();
app.use(express.json());


// 1. MOCK DATABASE (Temporary)
let products = [
    { id: 1, name: "Blue Shirt", size: "M" },
    { id: 2, name: "Red Shirt", size: "L" }
];

// 2. READ (Get all)
app.get('/products', (req, res) => {
    res.status(200).send(products);
});

// 3. CREATE (Add new)
app.post('/products', (req, res) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).send({ error: "Missing JSON body in Postman!" });
    }
    const { name, size } = req.body;
    console.log("Body is:", req.body);
    if (!name || !size) {
        return res.status(400).send({ error: "Name and Size required" });
    }
    const newProduct = { id: products.length + 1, name, size };
    products.push(newProduct);
    res.status(201).send(newProduct); // 201 means "Created Successfully"
});

// 4. UPDATE (Modify existing)
app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    
    let item = products.find(p => p.id === parseInt(id));
    if (!item) return res.status(404).send({ error: "Product not found" });

    item.name = name; // Update the name
    res.send({ message: "Updated!", item });
});

// 5. DELETE (Remove)
app.delete('/products/:id', (req, res) => {
    products = products.filter(p => p.id !== parseInt(req.params.id));
    res.send({ message: "Deleted successfully" });
});

app.listen(3000, () => console.log("Server ready on port 3000"));