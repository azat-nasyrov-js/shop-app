const express = require('express');
const cors = require('cors');
const fileDb = require('./fileDb');
const products = require('./app/products');

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

fileDb.init();

const port = 8000;

app.use('/products', products);

app.listen(port, () => {
  console.log(`Server started on ${port} port!`);
});