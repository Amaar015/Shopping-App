
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const users = require('./data/user');
const products = require('./data/products');
const User = require('./models/user');
const Product = require('./models/Product')
const Order = require('./models/order');
const connectDB = require('./config/config')
require('colors')

dotenv.config();
connectDB();

const ImportData = async () => {
    try {
        await Order.deleteMany();
        await User.deleteMany();
        await Product.deleteMany();
        const createUser = await User.insertMany(users);
        const adminUser = createUser[0]._id
        const sampleData = products.map(product => {
            return { ...product, user: adminUser }
        })
        await Product.insertMany(sampleData);
        console.log('Date Imported to database'.green.inverse)
        process.exit(1);
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1);
    }
}
const DestroyDate = async () => {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();
    console.log(`${error}`.purple.inverse)
    process.exit();
}