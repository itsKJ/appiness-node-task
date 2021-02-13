const mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

mongoose.model("Product", productSchema)