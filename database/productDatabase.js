const fs = require('fs/promises');
const path = require('path');

const pathToFile = path.join(__dirname, '..', 'data.json');

async function readData() {
    try {
        let data = await fs.readFile(pathToFile, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.log(err);
    }
}

async function writeData(data) {
    await fs.writeFile(pathToFile, JSON.stringify(data, null, 2));
}

module.exports = { readData, writeData };