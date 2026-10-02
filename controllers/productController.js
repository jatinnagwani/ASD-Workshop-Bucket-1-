const { 
    getProducts, 
    getProductById, 
    addProduct 
} = require('../services/productService');
const { clearCache } = require('../middleware/cache'); // Adjust path to your cache middleware if needed

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

async function createProduct(req, res) {
    const product = await addProduct(req.body);
    clearCache(); // Invalidates the cache when a new product is added
    res.status(201).json(product);
}

module.exports = {
    getAllProducts,
    getProduct,
    createProduct
};