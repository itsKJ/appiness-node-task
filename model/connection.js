const mongoose = require("mongoose");
require('dotenv/config');

mongoose.connect(process.env.DB_CONNECTION,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    (err) => {
        if (!err)
            console.log("Connected to DB")
        else
            console.log("Error connecting to database ", err)
    })

const Category = require("./category.model")
const Product = require("./product.model")