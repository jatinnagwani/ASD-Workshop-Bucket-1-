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

module.exports = { readData };