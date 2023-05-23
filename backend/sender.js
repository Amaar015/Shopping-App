
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const users = require('./data/user');
const products = require('./data/products');
const User = require('./models/user');
const Product = require('./models/Product')
const Order = require('./models/order');
// const connectDb = require('./config/config')
require('colors')

dotenv.config();
require('./config/config')

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
const DestroyData = async () => {
    try {
        await Order.deleteMany();
        await User.deleteMany();
        await Product.deleteMany();
        console.log(`Date deleted successfully`.green.inverse)
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit();
    }

}

if (process.argv[2] === '-d') {
    DestroyData()
} else {
    ImportData();
}