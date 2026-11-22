const { readData, writeData } = require('../database/productDatabase');

async function getProducts() {
    return readData();
}

async function getProductById(id) {
    const products = await readData();

    return products.find(item => item.id === Number(id));
}

async function addProduct(product) {
    const products = await readData();

    if (!product || typeof product !== 'object' || Array.isArray(product)) {
        throw new Error('Invalid product data');
    }

    const { id, name, price } = product;

    if (!Number.isInteger(id) || id <= 0) {
        throw new Error('Product ID must be a positive integer');
    }

    if (typeof name !== 'string' || !name.trim()) {
        throw new Error('Product name is required');
    }

    if (typeof price !== 'number' || price < 0 || !Number.isFinite(price)) {
        throw new Error('Product price must be a valid non-negative number');
    }

    if (products.some(item => item.id === id)) {
        throw new Error('Product ID already exists');
    }

    products.push({ id, name: name.trim(), price });

    await writeData(products);

    return { id, name: name.trim(), price };
}

module.exports = {
    getProducts,
    getProductById,
    addProduct
};