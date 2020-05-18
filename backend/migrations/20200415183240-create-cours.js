'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Cours', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            profId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Profs',
                    key: 'id',
                }
            },
            dateCour: {
                type: Sequelize.DATE
            },
            heureCour: {
                type: Sequelize.DATE
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
        return queryInterface.dropTable('Cours');
    }
};