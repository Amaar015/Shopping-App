const hashPassword = require('../helpers/authHelpers.js');
const userModel = require('../models/userModels')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config();
const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;
        //   validations
        if (!name) {
            return res.send({
                error: "Name is required"
            })
        }
        if (!email) {
            return res.send({
                error: "Email is required"
            })
        }
        if (!phone) {
            return res.send({
                error: "Phone number is required"
            })
        }
        if (!password) {
            return res.send({
                error: "Password is required"
            })
        }
        if (!address) {
            return res.send({
                error: "Address is required"
            })
        }
        //    check user
        // i case is existing user
        const existUser = await userModel.findOne({ email })
        if (existUser) {
            return res.status(200).send({
                success: true,
                message: "Already Registered Please login"
            })
        }
        // ii create new user
        const hashedPassword = await hashPassword(password);
        const user = await new userModel({ name, email, phone, address, password: hashedPassword })
        user.save();
        res.status(201).send({
            success: true,
            message: "User Register successfully",
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Registration',
            error
        })
    }
}
// post Login

const LoginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Email or Password is Invalid"
            })
        }
        const user = await userModel.findOne({ email })
        if (!email) {
            return res.status(404).send({
                success: false,
                message: 'Email is not exist'
            })
        }
        const match = await hashPassword.comparePassword(password, user.password)
        if (!match) {
            return res.status(200).send({
                success: false,
                message: "Invalid Password",
            })
        }
        const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '4d' });
        res.status(200).send({
            success: true,
            message: "Login successfully",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
            },
            token,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Login",
            error
        })
    }
}



module.exports = {
    registerController,
    LoginController
};
