const { hashPassword, comparePassword } = require('../helpers/authHelpers');
const userModel = require('../models/userModels')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config();

const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address, question } = req.body;
        //   validations
        if (!name) {
            return res.send({
                message: "Name is required"
            })
        }
        if (!email) {
            return res.send({
                message: "Email is required"
            })
        }
        if (!phone) {
            return res.send({
                message: "Phone number is required"
            })
        }
        if (!question) {
            return res.send({
                message: "Answer is required"
            })
        }

        if (!password) {
            return res.send({
                message: "Password is required"
            })
        }
        if (!address) {
            return res.send({
                message: "Address is required"
            })
        }
        //    check user
        // i case is existing user
        const existUser = await userModel.findOne({ email })
        if (existUser) {
            return res.status(200).send({
                success: flase,
                message: "Already Registered Please login"
            })
        }
        // ii create new user
        const hashedPassword = await hashPassword(password);
        const user = await new userModel({ name, email, phone, address, password: hashedPassword, question })
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
        const match = await comparePassword(password, user.password)
        if (!match) {
            return res.status(200).send({
                success: false,
                message: "Invalid Password",
            })
        }
        const token = await jwt.sign({ _id: user._id }, 'xzyuvwrsfdgheakmnoeqiset', { expiresIn: '4d' });
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


const authController = async (req, res) => {
    try {
        const user = await userModel.findById({ _id: req.body.userId });
        // user.password = undefined;
        if (!user) {
            return res.status(200).send({
                message: "user not found",
                success: false,
            });
        } else {
            // console.log(user)
            res.status(200).send({
                success: true,
                data: user,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "auth error",
            success: false,
            error,
        });
    }
};

const forgetPasswordController = async (req, res) => {
    try {
        const { email, question, Newpassword } = req.body;
        if (!email) {
            req.status(400).send({ message: "Emial is required" });
        }
        if (!question) {
            req.status(400).send({ message: "Question is required" });
        }
        if (!Newpassword) {
            req.status(400).send({ message: "Password is required" });
        }
        // check user
        const user = await userModel.findOne({ email, question })
        if (!user) {
            res.status(404).send({
                message: "Invalid Email or Password",
                success: false,
            })
        }
        const hashed = await hashPassword(Newpassword);
        await userModel.findByIdAndUpdate(user._id, { password: hashed })
        res.status(200).send({
            message: "Password reset successfully",
            success: true,

        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'Error in forget Password',
            success: false,
            error
        })
    }
}


module.exports = {
    registerController,
    LoginController,
    authController,
    forgetPasswordController
};
