
// import an express
const express = require('express');
// create a router object
const { registerController, LoginController, authController, forgetPasswordController, updateProfileController } = require('../controller/authController.js');
const { requireSignIn } = require('../midelwares/authMiddleware.js');
const loginMiddleware = require('../midelwares/loginMiddleware.js');

const router = express.Router();


// routing
// register routes post methode
router.post('/register', registerController)

// Login routes post methode

router.post('/login', LoginController)
// auth
router.post('/getUserData', loginMiddleware, authController)

// Forget password || post
router.post('/forget-password', forgetPasswordController)
// Update Profule

router.post('/update-profile', updateProfileController)


module.exports = router;
