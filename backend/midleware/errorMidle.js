
const errHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : statusCode;
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_DEV === 'Product' ? null : err.stack
    })
}

module.exports = { errHandler }