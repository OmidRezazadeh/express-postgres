const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    database: "blog",
    username: "postgres",
    password: "admin",
    host: "localhost",
    dialect: "postgres", 
});

module.exports = sequelize;
