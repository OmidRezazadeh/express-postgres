const db = require('../models/index'); // Importing the Sequelize models

// Route handler for creating a new user
exports.store = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    try {
        // Creating a new user in the database
        const user = await db.User.create({
            name: name,
            email: email,
            password: password
        });
        // Sending a success response with the created user
        res.status(201).json(user);
    } catch (error) {
        // Handling errors and sending a generic error response
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
}

// Route handler for listing users
exports.list = async (req, res) => {
    const id = req.params.id;
    if (id) {
        // If ID is provided in the request, find a single user by ID
        const user = await db.User.findByPk(id);
        if (user) {
            return res.status(200).json({ user: user });
        }
    }
    // If no ID provided, fetch all users
    const users = await db.User.findAll();
    return res.status(200).json({ users: users });
} 

// Route handler for deleting a user
exports.delete = async (req, res) => {
    const id = req.params.id;
    // Deleting the user with the specified ID
    await db.User.destroy({ where: { id: id } });
    return res.status(200).json({ "message": "ok" });
}

// Route handler for editing a user's name
exports.edit = async (req, res) => {
    const name = req.body.name;
    const id = req.params.id;
    try {
        // Finding the user by ID
        const user = await db.User.findByPk(id);
        if (user) {
            // Updating the user's name
            await user.update({ name: name });
            res.status(200).json({ "message": "ok" });
        } else {
            // If user not found, return a 404 error response
            res.status(404).json({ "error": "User not found" });
        }
    } catch (error) {
        // Handling errors and sending a generic error response
        console.log(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
}
