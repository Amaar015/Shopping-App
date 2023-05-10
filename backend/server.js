const express = require('express')
const port = 8000;
const products = require('./data/products')
const app = express();

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
app.listen(port, () => {
    console.log(`listening from the port ${port}`)
})