'use strict';
module.exports = (sequelize, DataTypes) => {
  const Eleve = sequelize.define('Eleve', {
    nomEleve: DataTypes.STRING,
    uid: DataTypes.STRING,
    prenomEleve: DataTypes.STRING,
    mailEleve: DataTypes.STRING,
    niveauEleve: DataTypes.STRING,
    rueEleve: DataTypes.STRING,
    villeEleve: DataTypes.STRING,
    zipEleve: DataTypes.STRING,
    paysEleve: DataTypes.STRING
  }, {});
  Eleve.associate = function(models) {
    // associations can be defined here
  };
  return Eleve;
};