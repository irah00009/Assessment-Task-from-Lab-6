// app.js
const express = require('express');
const cors = require('cors'); // Import cors
const products = require('./jsonData'); // Import JSON data
const productsXML = require('./xmlData'); // Import XML data

const app = express();
const PORT = 3000; // Using port 3000

// Use cors middleware to enable CORS
app.use(cors());

// Serve JSON data at the /api/json endpoint
app.get('/api/json', (req, res) => {
    res.json(products);
});

// Serve XML data at the /api/products/xml endpoint
app.get('/api/products/xml', (req, res) => {
    res.header("Content-Type", "application/xml");
    res.send(productsXML);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
