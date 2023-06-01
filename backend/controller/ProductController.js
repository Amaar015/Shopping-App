
const fs = require('fs');
const productModle = require('./../models/ProductModle');
const createProductController = async (req, res) => {
    const slugify = require('slugify');
    try {
        const { name, slug, description, price, category, quantity, shipping } = req.fields;
        const { image } = req.files;
        switch (true) {
            case !name:
                return res.status(500).send({ error: "Name is required" })
            case !description:
                return res.status(500).send({ error: "Description is required" })
            case !price:
                return res.status(500).send({ error: "Price is required" })
            case !category:
                return res.status(500).send({ error: "Category is required" })
            case !quantity:
                return res.status(500).send({ error: "Quantity is required" })
            case !image && image.size > 10000:
                return res.status(500).send({ error: "Image is required and it could be less than 1mb" })
        }
        const product = new productModle({ ...req.fields, slug: slugify(name) });
        if (image) {
            product.image.data = fs.readFileSync(image.path)
            product.image.contentType = image.type;
        }
        await product.save();
        res.status(201).send({
            success: true,
            message: 'Product sotred successfully',
            product,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in product creation",
            error,
        })
    }
}

const getAllProductController = async (req, res) => {
    try {
        const product = await productModle.find({}).select('-image').limit(12).sort({ createdAt: -1 });
        if (!product) {
            return res.status(400).send({
                success: false,
                message: "Product dose not exists"
            })
        }
        res.status(200).send({
            success: true,
            message: "Product get successfully",
            product,
            counTotal: product.length,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in geting Products",
            error
        })
    }
}

const getSingleProduct = async (req, res) => {
    try {
        const product = await productModle.findOne({ slug: req.params.slug }).select('-image').populate('category')
        res.status(200).send({
            success: false,
            message: "Product finds successfully",
            product,
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in single product",
            error,
        })
    }

}

const getProductPhoto = async (req, res) => {
    try {
        const product = await productModle.findById(req.params.pid).select("image");
        if (product.image.data) {
            res.set("Content-type", product.image.contentType);
            return res.status(200).send(product.image.data);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Erorr while getting photo",
            error,
        });
    }
}


const deleteProduct = async (req, res) => {
    try {
        const product = await productModle.findByIdAndDelete(req.params.id).select('-image')
        res.status(200).send({
            success: true,
            message: "Product deleted Successfully",
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Deleting Product",
            error,
        })
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params.id;


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in update Product",
            error
        })
    }
}

module.exports = {
    createProductController,
    getAllProductController,
    getSingleProduct,
    updateProduct,
    getProductPhoto,
    deleteProduct
}