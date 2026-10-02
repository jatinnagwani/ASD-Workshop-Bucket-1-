const {
    getProducts,
    getProductById
} = require('../services/productService');

async function getAllProducts(req, res) {
    const products = await getProducts();
    res.json(products);
}

async function getProduct(req, res) {
    const product = await getProductById(req.params.id);

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
}

module.exports = {
    getAllProducts,
    getProduct
};