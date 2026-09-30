// const express = require('express');
// const app = express();
// const path = require('path');
// const filepath = path.join(__dirname, "./data.json");

// app.get('/products', (req, res) => {
//     const data = fs.readFileSync(filepath, 'utf-8');
//     console.log(data)
// });

// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});