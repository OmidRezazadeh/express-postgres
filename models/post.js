'use strict';
const { Model } = require('sequelize');
const db = require('./index');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, { foreignKey: 'userId', as: 'author' });
    }
  }
  Post.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};