
const express = require('express');
const asynchandler = require('express-async-handler');
const products = require('../models/Product');
const router = express.Router();

router.get('/products', asynchandler(async (req, res) => {
    const product = await products.find({});
    res.json(product)
})
);

router.get('/products/:id', asynchandler(async (req, res) => {
    const product = await products.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.status(404).json({ message: "Prodcut not found" })
    }

})
);

module.exports = router;