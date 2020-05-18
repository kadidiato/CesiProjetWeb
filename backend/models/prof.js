'use strict';
module.exports = (sequelize, DataTypes) => {
    const Prof = sequelize.define('Prof', {
        nomProf: DataTypes.STRING,
        prenomProf: DataTypes.STRING,
        mailProf: DataTypes.STRING,
        matiereProf: DataTypes.STRING,
        nbAvisPos: DataTypes.INTEGER,
        nbAvisNeg: DataTypes.INTEGER,
        niveauProf: DataTypes.STRING,
        rueProf: DataTypes.STRING,
        villeProf: DataTypes.STRING,
        zipProf: DataTypes.STRING,
        paysProf: DataTypes.STRING
    }, {});
    Prof.associate = function (models) {
        // associations can be defined here
        models.Prof.hasMany(models.Cours);
    };
    return Prof;
};