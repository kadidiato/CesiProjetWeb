'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Eleves', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            nomEleve: {
                allowNull: false,
                type: Sequelize.STRING
            },
            prenomEleve: {
                allowNull: false,
                type: Sequelize.STRING
            },
            mailEleve: {
                type: Sequelize.STRING
            },
            niveauEleve: {
                allowNull: false,
                type: Sequelize.STRING
            },
            rueEleve: {
                type: Sequelize.STRING
            },
            villeEleve: {
                allowNull: false,
                type: Sequelize.STRING
            },
            zipEleve: {
                type: Sequelize.STRING
            },
            paysEleve: {
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
        return queryInterface.dropTable('Eleves');
    }
};