
const bcrypt = require('bcryptjs');


const Users = [
    { name: ' Admin', email: 'admin@gmail.com', password: bcrypt.hashSync('123456', 10), isAdmin: true },
    { name: 'user', email: 'user@gmail.com', password: bcrypt.hashSync('12345', 10) },
    { name: ' amaar', email: 'amaar@gmail.com', password: bcrypt.hashSync('amaar', 10) },

]

module.exports = Users;