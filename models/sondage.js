'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sondage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sondage.init({
    date_creation: DataTypes.DATE,
    date_expiration: DataTypes.DATE,
    day_votetime: DataTypes.INTEGER,
    hour_votetime: DataTypes.INTEGER,
    associated_picture: DataTypes.BLOB,
    backgroundcolor: DataTypes.STRING,
    idUser: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User', // nom du modèle référencé
        key: 'id' // nom de la colonne référencée
      }
    },
    idSondage: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Vote', // nom du modèle référencé
        key: 'id' // nom de la colonne référencée
      }
    },
  }, {
    sequelize,
    modelName: 'Sondage',
  });
  return Sondage;
};