'use strict';
module.exports = (sequelize, DataTypes) => {
  const utilisateur = sequelize.define('utilisateur', {
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    email: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  utilisateur.associate = function(models) {
    // associations can be defined here
  };
  return utilisateur;
};