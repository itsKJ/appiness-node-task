const express = require("express");
const app = express();
const connection = require("./model/connection");
require('dotenv/config');


const productsController = require("./routes/products")

const categoriesRoute = require('./routes/categories');

const setupRoute = require('./routes/setup_db');

app.use('/categories', categoriesRoute);
app.use('/products', productsController);
app.use('/setup', setupRoute);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}...`);
});