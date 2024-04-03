const db = require('../models/index'); // Importing the Sequelize models
exports.store = async (req, res) => {

    //    fatch data from user posts
    // try {
    //     const user = await db.User.findByPk(4,

    //         {
    //             include: [{
    //                 model: db.Post,
    //                 as: 'posts' // Make sure this matches the association alias
    //             }]
    //         });
    //     res.status(200).json({user:user});

    // } catch (err) {
    //     console.log(err)
    // }


    //  make post and fatch with user 
    // const title = "title test";
    // const description = "description test sdfsdfkgjniiguh";
    // const userId = 4;

    // try {
    //     const post = await db.Post.create({
    //         title: title,
    //         description: description,
    //         userId: userId

    //     });
    //     const userData ={title,description,userId}
    //     const response = await {
    //         ...post.toJSON(),
    //         author: userData 
    //     };

    //     res.status(201).json(response);
    // } catch (err) {
    //     console.log(err);
    // }



    //  fatch all data with relation user 
    // const posts = await db.Post.findAll({
    //     include: [{
    //         model: db.User,
    //         as: 'author' // This is the name specified in the association
    //     }]
    // });
    //     res.status(200).json({ "posts": posts});


    //  fatch all data with relation user 
    // const posts = await db.Post.findAll({
    //     include: [{
    //         model: db.User,
    //         as: 'author' // This is the name specified in the association
    //     }]
    // });
    //res.status(200).json({ "posts": posts});

}

