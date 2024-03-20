const Sequelize= require('sequelize');
const db= require('../utils/database');

const User = db.define('user',{
id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true,
},
name:Sequelize.STRING,
email:Sequelize.STRING,
password:{
    type:Sequelize.STRING,
    allowNull:false,
},
});
module.exports=User;