const express = require("express");
const mongoose = require("mongoose");


const router = express.Router();

const Product = mongoose.model("Product")

const Category = mongoose.model("Category")

const products = [
    { name: "shirt", category: "fashion" },
    { name: "pizza", category: "food" },
    { name: "motor bike", category: "vehicle" },
    { name: "trousers", category: "fashion" },
    { name: "car", category: "vehicle" },
    { name: "bus", category: "vehicle" },
    { name: "burger", category: "food" },
    { name: "french fries", category: "food" },
    { name: "beverages", category: "food" },
    { name: "rice", category: "food" }
]

var categories = [
    {
        category: "fashion",
        products: []
    },
    {
        category: "food",
        products: []
    },
    {
        category: "vehicle",
        products: []
    }
]


router.get("/", async (req, res) => {

    await mongoose.connection.db.dropDatabase();

    var promise = new Promise((resolve) => {

        products.forEach(async (p, index) => {
            var product = new Product();
            product.name = p.name;
            let id = await product.save();
            categories.find(e => e.category == p.category).products.push(id._id)
            if (index == (products.length - 1)) {
                resolve()
            }
        })

    })
    promise.then(async () => {
        categories.forEach(async (cat, index) => {
            var category = new Category();
            category.name = cat.category;
            category.products = cat.products;
            await category.save();
            categories[index].products = [];
        })
        res.send("data is added")
    })
})

module.exports = router;