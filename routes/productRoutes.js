const express = require('express');
const { cacheMiddleware } = require('../middleware/cache');

const {
    getAllProducts,
    getProduct
} = require('../controllers/productController');

const router = express.Router();

router.get('/products',cacheMiddleware, getAllProducts);
router.get('/products/:id', cacheMiddleware, getProduct);

module.exports = router;