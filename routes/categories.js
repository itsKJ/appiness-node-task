const express = require('express');
const router = express.Router();
const Category = require('../model/category.model')

router.get('/', async (req, res) => {
    var categories = await Category.find();
    var cat = [];

    categories.forEach(c => {
        cat.push({
            "category": c.name,
            "items": c.products.length
        })
    })

    res.json(cat)
});

router.get('/:categoryName', async (req, res) => {
    var categoryName = req.params.categoryName
    var docs = await Category.findOne({ name: categoryName }).populate("products")
    if (!docs || docs.length == 0)
        res.status(400).send(`No items found for '${categoryName}' category`)
    else
        res.json(docs)
});

module.exports = router;