'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Profs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            nomProf: {
                type: Sequelize.STRING
            },
            prenomProf: {
                type: Sequelize.STRING
            },
            mailProf: {
                type: Sequelize.STRING
            },
            matiereProf: {
                type: Sequelize.STRING
            },
            nbAvisPos: {
                type: Sequelize.INTEGER
            },
            nbAvisNeg: {
                type: Sequelize.INTEGER
            },
            niveauProf: {
                type: Sequelize.STRING
            },
            rueProf: {
                type: Sequelize.STRING
            },
            villeProf: {
                type: Sequelize.STRING
            },
            zipProf: {
                type: Sequelize.STRING
            },
            paysProf: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Profs');
    }
};