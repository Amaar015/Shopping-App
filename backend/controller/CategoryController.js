const categoryModel = require("../models/CategoryModles");
const slugify = require("slugify");


const createCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        console.log(name)
        if (!name) {
            return res.status(400).send({ message: "Category name is required" })
        }
        const existingCategoy = await categoryModel.findOne({ name });
        if (existingCategoy) {
            return res.status(200).send({
                success: true,
                message: "category already exisits"
            })
        }
        const category = await new categoryModel({ name, slug: slugify(name) }).save();
        res.status(201).send({
            success: true,
            message: 'new category created',
            category,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Error in find category",
            error,
            success: false
        })
    }
}


const updateCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;
        const category = await categoryModel.findByIdAndUpdate(id, { name, slug: slugify(name) }, { new: true })
        res.status(200).send({
            success: true,
            message: "category updated Successfuly",
            category,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in update category',
            error,
        })
    }
}

const getAllCategoriesController = async (req, res) => {
    try {
        const categroies = await categoryModel.find();
        if (!categroies) {
            return res.status(400).send({
                message: "Categories dose not exists",
            })
        }
        res.status(200).send({
            success: true,
            message: "All categories here",
            categroies,
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in get categories",
            error,
        })
    }
}

const getsigleCategoryController = async (req, res) => {
    try {

        const category = await categoryModel.findOne({ slug: req.params.slug })
        res.status(200).send({
            success: true,
            message: "get single category successfully",
            category,
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error in single categories",
            error
        })
    }
}

const deleteOneCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await categoryModel.findByIdAndDelete(id)
        res.status(200).send({
            success: true,
            message: 'Category deleted successfully',

        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error in delete category",
            error,
        })
    }
}

module.exports = {
    createCategoryController,
    updateCategoryController,
    getAllCategoriesController,
    getsigleCategoryController,
    deleteOneCategory
}