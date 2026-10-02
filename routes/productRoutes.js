const express = require('express');
const { cacheMiddleware } = require('../middleware/cache');


const {
    getAllProducts,
    getProduct,
    createProduct
} = require('../controllers/productController');

const router = express.Router();

router.get('/products',cacheMiddleware, getAllProducts);
router.get('/products/:id', cacheMiddleware, getProduct);
router.post('/products', createProduct);

module.exports = router;