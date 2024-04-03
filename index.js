const express = require('express');
const connectDB = require("./utils/database.js");
const dotenv = require('dotenv');
const app = express();
const router = require('./routes/User.js');
const Postrouter = require('./routes/Post.js');
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connecting to the database


app.use('/api/v1/users', router);
app.use('/api/v1/posts', Postrouter);

connectDB.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
        app.listen(process.env.PORT, () =>
            console.log(
                `Node API app is running in mode on port ${process.env.PORT}`
            )
        );
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
