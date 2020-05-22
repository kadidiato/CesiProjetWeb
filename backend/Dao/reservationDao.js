const models = require('../models');


const sequelize = require('sequelize');


async function getCoursByEleve(id) {
    return models.sequelize.query("select Cours.* " +
        "from Cours join Reservations R on Cours.id = R.coursId where eleveId = ?",
        {
            replacements: [id],
            type: sequelize.QueryTypes.SELECT
        });

}

module.exports = {
    getCoursByEleve,

};