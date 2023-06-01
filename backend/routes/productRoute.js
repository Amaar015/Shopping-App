const express = require('express');
const { createProductController, getAllProductController, getSingleProduct, updateProduct, getProductPhoto, deleteProduct } = require('../controller/ProductController');
const formidable = require('express-formidable')
const router = express.Router();


// create product
router.post('/create-product', formidable(), createProductController)

// get all product

router.get('/getallproduct', getAllProductController)
// get single product route
router.get('/getsingleproduct/:slug', getSingleProduct);

// Update single product route
router.put('/update-product/:id', updateProduct);
// get photo 
router.get('/product-photo/:pid', getProductPhoto)

// delete product
router.delete('/delete-product/:id', deleteProduct);

module.exports = router;