const db = require('../models/index'); // Importing the Sequelize models
const { faker } = require('@faker-js/faker');
const { Op, where } = require("sequelize");

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
exports.mockSeeder = async (req, res) => {
    try {
        const mockUsers = [];
        for (let i = 0; i < 20; i++) {
            const user = await db.User.create({
                name: faker.person.firstName(),
                email: faker.internet.email(),
                password: faker.internet.password()
            });
            mockUsers.push(user);
        }
        console.log(`Successfully created mock users.`);
        res.status(200).json({ mockUsers: mockUsers });
    } catch (error) {
        console.error('Error creating mock users:', error);
    }
}
exports.findmethod = async (req, res) => {



    //like instances/rows after 8  limit 5
    // try {
    //     const users = await db.User.findAll({ offset: 5, limit: 5 });
    //     res.status(200).json({ "users": users });
    // } catch (error) {
    //     console.log(error);
    // }


    //like  return conut 
    // try {
    //     const users = await db.User.count({
    //         where: {
    //             id: {
    //                 [Op.gt]: 25
    //             }
    //         }
    //     });
    //     res.status(200).json({ "users": users });
    // } catch (error) {

    // }


    //like instances/rows after 8
    // try {
    //     const users = await db.User.findAll({ offset: 8 });
    //     res.status(200).json({ "users": users });
    // } catch (error) {
    //     console.log(error);
    // }







    //like lilmit
    // try {
    //     const users = await db.User.findAll({limit:10});
    //     res.status(200).json({ "users": users });
    // } catch (error) {
    //     console.log(error);
    // }





    // link order find one
    // try {
    //     const users = await db.User.findOne({order:[['name', 'DESC']]});
    //     res.status(200).json({ "users": users });
    // } catch (error) {
    //     console.log(error);
    // }


    // link order
    // try {
    //     const users = await db.User.findAll({order:[['name', 'DESC']]});
    //     res.status(200).json({ "users": users });
    // } catch (error) {
    //     console.log(error);
    // }

    // like creating multiple records 
    // try {
    //     const users = await db.User.bulkCreate([
    //         { name: 'name', email: 'email', password: 'password' },
    //         { name: 'name1', email: 'email1', password: 'password1' },
    //         { name: 'name2', email: 'email2', password: 'password2' }
    //     ]);
    //     res.status(200).json({ "users": users });
    // } catch (error) {
    //     console.log(error);
    // }


    // like update
    // try {
    //     const user = await db.User.update({name:"ahmad"},
    //     {where: {name:"test"}
    //         });
    //     res.status(200).json({ "user": "ok" });
    // } catch (error) {
    //     console.log(error);
    // }

    // like not
    // try {
    //     const user = await db.User.findAll({
    //         where: {
    //             [Op.not]: [
    //                 {
    //                     id: [4, 8]     
    //                 }
    //             ]
    //         }
    //     });
    //     res.status(200).json({ "user": user });
    // } catch (error) {
    //     console.log(error);
    // }






    // like in
    // try {
    //     const users = await db.User.findAll({
    //         where: {
    //             id: [4, 8]
    //         }
    //     });
    //     res.status(200).json({ "users": users });
    // } catch (error) {
    //     console.log(error);
    // }





    //  find or create user 
    // try {
    //     const [user, created] = await db.User.findOrCreate({
    //         //if find user name is  alivia 
    //         where: { name: "Alivia" },
    //         //else make user  with name alivia and email password
    //         defaults: {
    //             email: 'evil@example.com',
    //             password: "retertrtrt"
    //         }
    //     });

    //     if (created) {
    //         res.status(200).json({ 'User created:': user });
    //     } else {
    //         res.status(404).json({ 'User found:': user });
    //     }

    // } catch (error) {
    //     console.log(error)
    // }




    // like  between
    // try{
    // const users = await db.User.findAll({
    //     where: {
    //         id:{
    //             [Op.between]: [4,8]
    //         }
    //     }
    // });
    // res.status(200).json({ "users": users });
    // }catch (error) {
    // console.log(error);
    // }




    //    like %na%
    // try{
    //     const users = await db.User.findAll({
    //         where: {
    //             name:{
    //                 [Op.substring]: 'na'
    //             }
    //         }
    //     });
    //     res.status(200).json({ "users": users });
    //     }catch (error) {
    //     console.log(error);
    //     }







    //  like not
    // try {
    //     const user = await db.User.findAll({
    //         where:{
    //             id:{
    //                 [Op.not]: 20
    //             }
    //         }
    //     });
    //     res.status(200).json({ "user": user });
    // } catch (error) {
    //     console.log(error);
    // }


    // like or
    // try {
    //     const users = await db.User.findAll({
    //         where: {
    //             [Op.or]: [
    //                 { name: 'ahmad' },
    //                 { id: 3 }
    //             ]
    //         }
    //     });
    //     res.status(200).json({ "users": users })
    // } catch (error) {

    // }


    //  like and
    // try {
    //     const user = await db.User.findAll({
    //         where: {
    //             id: 3,
    //             name: "test",
    //         }
    //     });
    //     res.status(200).json({ user: user });
    // } catch (error) {
    //     console.log(error);
    // }


    // try {
    //     const user = await db.User.findAll({
    //         where: { id: { [Op.lt]: 4} }
    //     });
    //     res.status(200).json({ user: user });
    // } catch (error) {
    //     console.log(error);
    // }



    //    return  only name as name column
    // try {
    //     const user = await db.User.findAll({attributes: [
    //         ['name', 'names'], // Alias 'names' for the 'name' attribute
    //         ['email', 'emails'] // Alias 'emails' for the 'email' attribute
    //     ]  });
    //     res.status(200).json({ user });
    // } catch (error) {
    //     console.log(error);
    // }


    //    return  only name column
    // try {
    //     const user = await db.User.findAll({
    //         attributes: ['name']
    //     });
    //     res.status(200).json({ user });
    // } catch (error) {
    //     console.log(error);
    // }


    //remove name column
    // try {
    //     const users = await db.User.findAll({
    //         attributes: { exclude: ['name'] }
    //     });
    //     res.status(200).json({ users });

    // } catch (eror) {
    //     console.log(eror);
    // }


    // show row and count 
    // try {
    //     const { count, rows } = await db.User.findAndCountAll({
    //         where: { id: { [Op.gt]: 4 } },
    //     });
    //     res.status(200).json({ "count": count, "rows": rows });
    // } catch (error) {

    // }

}


exports.store = async (req, res) => {

    const name = "name for profile";
    const description = "description for profile";
    const email = "emailForProfile@gmail.com";
    const password = "passwordForProfile";
    const call = 21783561;
    let transaction;
    try {
     
        transaction = await db.sequelize.transaction();
        const user = await db.User.create({
            name: name,
            email: email,
            password
        }, { transaction });

        const profile = await db.Profile.create(
            {
                description: description,
                call: call,
                userId: 5,
            },
            { transaction }
        );
        await transaction.commit();
        res.status(200).json({ profile, user });
    } catch (error) {
        if (transaction){
             await transaction.rollback();
            }
        throw error;
  
    }








    // make post

    // const title = "title test";
    // const description = "description test sdfsdfkgjniiguh";
    // const userId = 4;


    // try {
    //     // Assume you have user data available, maybe from a request or cached earlier
    //     const userData = { id: userId, name: "User Name", email: "user@example.com" }; // Example user data

    //     const post = await db.Post.create({
    //         title: title,
    //         description: description,
    //         userId: userId
    //     });

    //     // Construct a response object manually
    //     const response = {
    //         ...post.toJSON(), // Convert Sequelize model instance to a plain object
    //         author: userData // Include user data manually
    //     };

    //     res.status(201).json(response);
    // } catch (err) {
    //     console.log(err);
    //     res.status(500).send("An error occurred while creating the post.");
    // }
}