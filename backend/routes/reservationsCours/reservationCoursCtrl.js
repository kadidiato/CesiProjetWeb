var models = require('../../models');
const reservationDao = require('../../Dao/reservationDao');

function destroyByCoursId(req, res) {
    let id_cours = req.params.id_cours;
    let id_eleve = req.params.id_eleve;

    models.Reservation.findOne({
        where: {
            coursId: id_cours,
            eleveId: id_eleve,
        }
    }).then((resa) => {
        if (!resa) {
            return res.status(404).json({
                message: "Aucune réservation pour le cours " + id_cours + " pour l'eleve " + id_eleve
            })
        }

        models.Reservation.destroy({
            where: { id: resa.id }
        }).then((destroyedReservation) => {
            return res.status(200).json(destroyedReservation);
        }).catch((err) => {
            return res.status(500).json(err);
        });
    });
}

/**
 * Controller pour recuperer tous les cours
 * @param req
 * @param res
 * @param next
 */
function getAll(req, res, next) {
    models.Reservation.findAll().then((reservation) => {
        //si je trouve pas de cours je retourne un status 404 avec un petit message
        if (!reservation)
            return res.status(404).json({
                message: 'aucun cours reservé n a ete trouvé'
            });
        //si tout s'est bien passé je retourne le status 200 et le cours trouvé
        return res.status(200).json(reservation);
    }).catch((err) => {
        //Erreur serveur => envoie erreur 500 et message au client
        return res.status(500).json(err);
    })
}

/**
 * Controller pour recuperer un cours par son id
 * @param req
 * @param res
 * @param next
 */
function getById(req, res, next) {
    let id = req.params.id;

    models.Reservation.findByPk(id).then((reservationFound) => {
        return res.json(reservationFound)
    }).catch((err) => {
        return res.json(err);
    });
}

/**
 * Controller pour recuperer les  cours reservent  par  un eleve grace a son id
 * @param req
 * @param res
 * @param next
 */

function getReservationByEleveId(req, res, next) {
    let eleve = req.params.eleveId;

    models.Reservation.findAll({
        /* // attributes:[],
         include: [
             {models: cours, where :{id : coursId},}
         ], */
        where: {
            eleveId: eleve,

        }
    }).then((reservation) => {
        //si je trouve pas de cours je retourne un status 404 avec un petit message
        if (!reservation)
            return res.status(404).json({
                message: 'aucun cours reservé trouvé'
            });

        //si tout s'est bien passé je retourne le status 200 et le cours trouvé

        return res.status(200).json(reservation);

    }).catch((err) => {
        //Erreur serveur => envoie erreur 500 et message au client
        return res.status(500).json(err);
    });

}
//UPDATE `cours` SET `status`=0 WHERE id= 1

async function getcourOfEleve(req, res) {
    let id = req.params.eleveId;
    let cours = await reservationDao.getCoursByEleve(id);
    if (!cours) {
        return res.status(404).json({
            message: 'aucun cours reservé trouvé'
        });
    }
    if (cours.status === 'error') {
        return res.status(500).json(cours);
    }

    return res.status(200).json(cours);

}


/**
 * Controller pour sauvegarder un cours
 * @param req
 * @param res
 * @param next
 */
async function save(req, res, next) {
    //recuperation des infos du cours à creer
    let reservation = {
        datereservation: req.body.datereservation,
        eleveId: req.body.eleveId,
        coursId: req.body.coursId
    };

    models.Reservation.findOne({
        where: {
            coursId: reservation.coursId,
            eleveId: reservation.eleveId,
        }
    }).then(async (resa) => {
        if (resa) {
            return res.status(304).json({
                message: "Une réservation existe deja pour le cours "
                    + reservation.coursId + " pour l'eleve " + reservation.eleveId
            });
        }

        let transaction = await models.sequelize.transaction({ autocommit: false });
        //insertion dans la base de données
        try {
            let resa = await models.Reservation.create(reservation, { transaction: transaction }).then((newReservation) => {
                return newReservation;
            }).catch((err) => {
                return err;
            });
            //mettre a jour le status du cour reserves
            let result = await reservationDao.updateCoursStatusOFF(reservation.coursId, transaction);

            //console.log('result');
            //console.log(result[0]);

            if (!result[0]) {
                await transaction.rollback();
                return res.status(500).json({
                    message: "cannot complete your request"
                });
            }
            await transaction.commit();

            return res.status(201).json(resa);
        } catch (e) {
            await transaction.rollback();
            return res.status(500).json(e);
        }
    });
}

/**
 * Controller pour supprimer un cours par son id
 * @param req
 * @param res
 * @param next
 */

async function destroy(req, res, next) {

    reservation_id = req.params.id;
    let transaction = await models.sequelize.transaction({ autocommit: false });

    let coursId = await reservationDao.getCoursIdByReservation(reservation_id, transaction);

    let resul = models.Reservation.destroy({
        where: { id: reservation_id }
    },{ transaction: transaction }).then((destroyedReservation) => {
        return res.status(200).json(destroyedReservation);
    }).catch((err) => {
        return res.status(500).json(err);
    })

    let id = coursId[0].coursId;
    let result = await reservationDao.updateCoursStatusON(id,transaction);
    console.log(result);

}

/**
 * Controller pour mettre à jour un cours
 * @param req
 * @param res
 * @param next
 */
function update(req, res, next) {
    let id = req.body.id;
    let reservation = {
        datereservation: req.body.datereservation,
        //heureCour: req.body.heureCour,
        EleveId: req.body.eleveId,
        CoursId: req.body.CoursId
    };

    models.Reservation.update(reservation, {
        where: { id: id }
    }).then((updatedReservation) => {
        return res.status(200).json(updatedReservation);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}

module.exports = {
    getAll, getById, save, destroy, update, getcourOfEleve, destroyByCoursId
};