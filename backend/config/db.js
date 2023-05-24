const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const colors = require('colors');
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, useUnifiedTopology: true,
})
    .then(() => {
        console.log(`connection created successfuly ...`.bgGreen.white);
    }).catch((err) => {
        console.log(`${err} occurs`.bgRed.white)
    })

