const express = require('express')
// const port = 8000;
const dotenv = require('dotenv')
const products = require('./data/products')
const ProductRoute = require('./routes/productroute')
const app = express();
const { errHandler } = require('./midleware/errorMidle')

// dotenv config 
dotenv.config()
// DATABASE
require('./config/config')
app.get('/', (req, res) => {
    res.send('hello world')
})

app.use(ProductRoute)
app.use(errHandler);
app.listen(process.env.PORT, () => {
    console.log(`listening from the port ${process.env.PORT}`)
})