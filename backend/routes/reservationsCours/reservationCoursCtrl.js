var models = require('../../models');

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
 * Controller pour sauvegarder un cours
 * @param req
 * @param res
 * @param next
 */
function save(req, res, next) {
    //recuperation des infos du cours à creer
    let reservation = {
        datereservation: req.body.datereservation,
        EleveId: req.body.eleveId,
        CoursId: req.body.CoursId
    };

    //insertion dans la base de données
    models.Reservation.create(reservation).then((newReservation) => {
        if (!newReservation) {
            return res.status(500).json({
                message: 'Une erreur est survenue lors de la création reservation'
            });
        }

        return res.status(201).json(newReservation);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

/**
 * Controller pour supprimer un cours par son id
 * @param req
 * @param res
 * @param next
 */
function destroy(req, res, next) {
    let reservation_id = req.params.id;

    models.Reservation.destroy({
        where: {id: reservation_id}
    }).then((destroyedReservation) => {
        return res.status(200).json(destroyedReservation);
    }).catch((err) => {
        return res.status(500).json(err);
    })
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
        where: {id: id}
    }).then((updatedReservation) => {
        return res.status(200).json(updatedReservation);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}

module.exports = {
    getAll, getById, save, destroy, update
};