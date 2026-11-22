const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = 3000;

// Middleware to parse incoming JSON bodies (needed for POST requests)
app.use(express.json());

// Mount your modular product routes
app.use(productRoutes);

// Centralized error handling middleware
app.use((err, req, res, next) => {
    console.error(err.message);

    res.status(400).json({
        message: err.message || 'Internal Server Error'
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});