'use strict';
module.exports = (sequelize, DataTypes) => {
    const Cours = sequelize.define('Cours', {
        dateCour: DataTypes.DATE,
        heureCour: DataTypes.DATE,
        matiere: DataTypes.STRING,
        description: DataTypes.STRING,
        prix_cours_heure: DataTypes.STRING,
        status: DataTypes.STRING
    }, {});
    Cours.associate = function (models) {
        // associations can be defined here
        models.Cours.belongsTo(models.Prof, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Cours;
};