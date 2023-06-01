const express = require('express');
const IsAdmin = require('../midelwares/authMiddleware');
const { createCategoryController, updateCategoryController, getAllCategoriesController, getsigleCategoryController, deleteOneCategory } = require('../controller/CategoryController');
const router = express.Router();


// create category
router.post('/create-category', createCategoryController)

// update category
router.put('/update-category/:id', updateCategoryController)
// get all categories
router.get('/getallcategories', getAllCategoriesController)

// get one single category
router.get('/getsingleCategory/:slug', getsigleCategoryController)
// delete one single category

router.delete('/delete-category/:id', deleteOneCategory)

module.exports = router;
