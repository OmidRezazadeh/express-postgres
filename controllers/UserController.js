const User = require('../models/User');
exports.store =async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
   const user= User.create({
        name: name,
        email: email,
        password: password
    });

    res.status(201).json(user);
}

exports.list = (req, res) => {

}

exports.delete = (req, res) => {

}
exports.edit = (req, res) => {

}