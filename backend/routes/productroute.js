
const express = require('express');
const asynchandler = require('express-async-handler');
const products = require('../models/Product');
const router = express.Router();

router.get('/products', (req, res) => {
    res.json(products)
})
router.get('/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

module.exports = router;