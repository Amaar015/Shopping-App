const jwt = require('jsonwebtoken');
const userModel = require('../models/userModels');



const requireSignIn = async (req, res, next) => {
    try {
        const deode = jwt.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        )
        req.user = deode;
        next();
    } catch (error) {
        console.log(error);
    }
};

// Admin access

const IsAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);
        if (user.role != 1) {
            return res.status(401).send({
                success: false,
                message: 'UnAuthorized Access',
            })
        }
        else {
            next();
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = { requireSignIn, IsAdmin };