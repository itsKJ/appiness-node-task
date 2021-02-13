const express = require("express");
const mongoose = require("mongoose");


const router = express.Router();

const Product = mongoose.model("Product")

router.get("/", async (req, res) => {
    var docs = await Product.find()
    res.json(docs)
})

router.get("/:productId", async (req, res) => {
    var doc = await Product.findById(req.params.productId)
    res.json(doc)
})

module.exports = router;