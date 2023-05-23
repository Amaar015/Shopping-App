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

app.listen(process.env.PORT, () => {
    console.log(`listening from the port ${process.env.PORT}`)
})