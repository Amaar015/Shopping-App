const express = require('express');
const { createProductController, getAllProductController, getSingleProduct, updateProduct, getProductPhoto, deleteProduct, ProductFilterController, ProductCount, ProductListController, SearchRoute, RelativeProductController } = require('../controller/ProductController');
const formidable = require('express-formidable');
const { IsAdmin } = require('../midelwares/authMiddleware');
const router = express.Router();


// create product
router.post('/create-product', formidable(), createProductController)

// get all product

router.get('/getallproduct', getAllProductController)
// get single product route
router.get('/getsingleproduct/:slug', getSingleProduct);

// Update single product route
router.put('/update-product/:id', formidable(), updateProduct)
// get photo 
router.get('/product-photo/:id', getProductPhoto)

// delete product
router.delete('/delete-product/:id', IsAdmin, deleteProduct);

// Product filter
router.post('/product-filter', ProductFilterController)

router.get('/product-count', ProductCount)

// product per page
router.get('/product-list/:page', ProductListController)
// Searh Product
router.get('/search/:keyword', SearchRoute);
// related product

router.get('/relative-product/:pid/:cid', RelativeProductController);


module.exports = router;