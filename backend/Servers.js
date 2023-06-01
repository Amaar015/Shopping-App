
const express = require('express');
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const authRoutes = require('./routes/authRoutes.js')
const CategoryRoute = require('./routes/CategoryRoute');
const productRoute = require('./routes/productRoute.js')
dotenv.config();
const app = express();

require('./config/db')
app.use(express.json())
app.get('/', (req, res) => {
    res.send('hello world from backend server')
})
// auth routes
app.use('/api/v1/auth', authRoutes)

// Category Routes

app.use('/api/vi/categroy', CategoryRoute)

// Product Routes

app.use('/api/vi/product', productRoute)


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server running in the ${process.env.DEV_MODE} at port ${PORT}`.green.inverse)
})