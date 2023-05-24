
const express = require('express');
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const authRoutes = require('./routes/authRoutes.js')
dotenv.config();
const app = express();

require('./config/db')
app.use(express.json())
app.get('/', (req, res) => {
    res.send('hello world from backend server')
})
// routes
app.use('/api/v1/auth', authRoutes)



const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server running in the ${process.env.DEV_MODE} at port ${PORT}`.green.inverse)
})