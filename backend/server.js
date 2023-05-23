const express = require('express')
// const port = 8000;
const dotenv = require('dotenv')
const products = require('./data/products')
const app = express();

// dotenv config 
dotenv.config()
// DATABASE
require('./config/config')
app.get('/', (req, res) => {
    res.send('hello world')
})
app.get('/products', (req, res) => {
    res.json(products)
})
app.get('/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})
app.listen(process.env.PORT, () => {
    console.log(`listening from the port ${process.env.PORT}`)
})