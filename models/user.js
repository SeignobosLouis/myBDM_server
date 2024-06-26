'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    pseudo: DataTypes.STRING,
    password_salt: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    profile_picture: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};