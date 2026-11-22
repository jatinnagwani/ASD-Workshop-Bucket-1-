const fs = require('fs/promises');
const path = require('path');

const pathToFile = path.join(__dirname, '..', 'data.json');

async function readData() {
    try {
        const data = await fs.readFile(pathToFile, 'utf-8');
        const products = JSON.parse(data);

        if (!Array.isArray(products)) {
            throw new Error('Invalid database format');
        }

        return products;
    } catch (err) {
        throw new Error(`Failed to read product data: ${err.message}`);
    }
}

async function writeData(data) {
    try {
        await fs.writeFile(pathToFile, JSON.stringify(data, null, 2));
    } catch (err) {
        throw new Error(`Failed to write product data: ${err.message}`);
    }
}

module.exports = { readData, writeData };