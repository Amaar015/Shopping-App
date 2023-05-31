const jwt = require('jsonwebtoken');
const userModel = require('../models/userModels');



// const authMiddle = async (req, res, next) => {
//     try {
//         const token = req.headers['authorization'].split(" ")[1];
//         jwt.verify(token, process.env.JWT_SECRET, (error, decode) => {
//             if (error) {
//                 return res.status(201).send({
//                     message: "Auth Failed",
//                     success: false,
//                 })
//             } else {
//                 req.body.userId = decode.id;
//                 next();
//             }
//         })
//     } catch (error) {
//         console.log(error);
//         res.status(401).send({ message: "Auth Failed", success: falses });
//     }

// };

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

module.exports = { IsAdmin };