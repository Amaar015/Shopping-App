const express = require('express')
const port = 8000;
const product = require('./data/products')
const app = express();

app.get('/product', (req, res) => {
    res.json(product)
})

app.listen(port, () => {
    console.log(`listening from the port ${port}`)
})