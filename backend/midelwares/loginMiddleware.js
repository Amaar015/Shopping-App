const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(" ")[1];
        jwt.verify(token, 'xzyuvwrsfdgheakmnoeqiset', (error, decode) => {

            if (error) {
                return res.status(201).send({
                    message: "Auth Failed",
                    success: false,
                })
            } else {
                req.body.userId = decode._id;
                next();
            }
        })
    } catch (error) {
        console.log(error);
        res.status(401).send({ message: "Auth Failed", success: falses });
    }

}