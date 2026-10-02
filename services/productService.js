const { readData, writeData } = require('../database/productDatabase');


async function getProducts() {
    return await readData();
}

async function getProductById(id) {
    const products = await readData();

    return products.find(item => item.id === Number(id));
}


async function addProduct(product) {
    const products = await readData();

    products.push(product);

    await writeData(products);

    return product;
}

module.exports = {
    getProducts,
    getProductById,
    addProduct
};