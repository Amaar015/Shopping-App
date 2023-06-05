const express = require('express');
const { createProductController, getAllProductController, getSingleProduct, updateProduct, getProductPhoto, deleteProduct, ProductFilterController } = require('../controller/ProductController');
const formidable = require('express-formidable');
const { IsAdmin } = require('../midelwares/authMiddleware');
const router = express.Router();


// create product
router.post('/create-product', formidable(), IsAdmin, createProductController)

// get all product

router.get('/getallproduct', getAllProductController)
// get single product route
router.get('/getsingleproduct/:slug', IsAdmin, getSingleProduct);

// Update single product route
router.put('/update-product/:id', formidable(), IsAdmin, updateProduct)
// get photo 
router.get('/product-photo/:id', getProductPhoto)

// delete product
router.delete('/delete-product/:id', IsAdmin, deleteProduct);

// Product filter
router.post('/product-filter', ProductFilterController)



module.exports = router;