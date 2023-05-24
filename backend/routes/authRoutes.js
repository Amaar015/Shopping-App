
// import an express
const express = require('express');
// create a router object
const { registerController, LoginController } = require('../controller/authController.js')

const router = express.Router();


// routing
// register routes post methode
router.post('/register', registerController)

// Login routes post methode

router.post('/login', LoginController)

module.exports = router;
