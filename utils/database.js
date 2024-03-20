const Sequelize = require('sequelize');

const connectDB = new Sequelize({
    database: "blog",
    username: "postgres",
    password: "admin",
    host: "localhost",
    dialect: "postgres", 
    pool:{
        max: 5, 
        min: 0,
        idle: 10000                
      },

});

module.exports = connectDB;
