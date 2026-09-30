const express = require('express');
const fs = require('fs/promises');
const path = require('path');
const app = express();
const port = 3000;

const pathToFile = path.join(__dirname, 'data.json');

async function readData(){
    let data = await fs.readFile(pathToFile,'utf-8');
    return JSON.parse(data);
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});