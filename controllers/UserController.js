const User = require('../models/user');
const db = require('../models/index');
exports.store = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    try {
        const user = await db.User.create({
            name: name,
            email: email,
            password: password
        });
        res.status(201).json(user);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }

}

exports.list = async (req, res) => {

    const users = await User.findAll();


}

exports.delete = (req, res) => {

}
exports.edit = (req, res) => {

}