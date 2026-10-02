const { readData } = require('../database/productDatabase');

async function getProducts() {
    return await readData();
}

async function getProductById(id) {
    const products = await readData();

    return products.find(item => item.id === Number(id));
}

module.exports = {
    getProducts,
    getProductById
};