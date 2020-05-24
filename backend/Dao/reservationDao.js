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
async function getCoursIdByReservation(id, transaction) {
    return models.sequelize.query("select coursId " +
        "from Reservations R where R.id= ? ",
        {
            replacements: [id],
            type: sequelize.QueryTypes.SELECT
        }, {transaction: transaction});


}

async function updateCoursStatusON(id) {
    return models.sequelize.query("UPDATE Cours SET status=0 WHERE id= ?",
        {
            replacements: [id],
            type: sequelize.QueryTypes.UPDATE
        });

}


async function updateCoursStatusOFF(id, transaction) {
    return models.Cours.update(
        {status: 1},
        {
            where: {id: id},
            transaction: transaction
        }).then((updatedReservation) => {
        return updatedReservation;
    }).catch((err) => {
        return err;
    });
}

module.exports = {
    getCoursByEleve,updateCoursStatusON,updateCoursStatusOFF, getCoursIdByReservation

};