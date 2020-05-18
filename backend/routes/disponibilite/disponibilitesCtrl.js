var models = require('../../models');

/**
 * Controller pour recuperer tous les disponibilites
 * @param req
 * @param res
 * @param next
 */
function getAll(req, res, next) {
    models.Disponibilite.findAll().then((disponibilite) => {
        //si je trouve pas de cours je retourne un status 404 avec un petit message
        if (!disponibilite)
            return res.status(404).json({
                message: 'aucun cours trouvé'
            });
        //si tout s'est bien passé je retourne le status 200 et le cours trouvé
        return res.status(200).json(disponibilite);
    }).catch((err) => {
        //Erreur serveur => envoie erreur 500 et message au client
        return res.status(500).json(err);
    })
}

/**
 * Controller pour recuperer un disponibilite par son id
 * @param req
 * @param res
 * @param next
 */
function getById(req, res, next) {
    let id = req.params.id;

    models.Disponibilite.findByPk(id).then((disponibiliteFound) => {
        return res.json(disponibiliteFound)
    }).catch((err) => {
        return res.json(err);
    });
}

/**
 * Controller pour sauvegarder une Disponibilite
 * @param req
 * @param res
 * @param next
 */
function save(req, res, next) {
    //recuperation des infos du cours à creer
    let disponibilite = {
        profId: req.body.profId,
        dateDispo: req.body.dateDispo,
        heureDispoDebu: req.body.heureDispoDebu,
        heureDispoFin: req.body.heureDispoFin,
        description: req.body.description,

    };

    //insertion dans la base de données
    models.Disponibilite.create(disponibilite).then((newDisponibilite) => {
        if (!newDisponibilite) {
            return res.status(500).json({
                message: 'Une erreur est survenue lors de la création d une Disponibilite '
            });
        }

        return res.status(201).json(newDisponibilite);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

/**
 * Controller pour supprimer une Disponibilite par son id
 * @param req
 * @param res
 * @param next
 */
function destroy(req, res, next) {
    let disponibilite_id = req.params.id;

    models.Disponibilite.destroy({
        where: { id: disponibilite_id }
    }).then((destroyedDisponibilite) => {
        return res.status(200).json(destroyedDisponibilite);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

/**
 * Controller pour mettre à jour une Disponibilite
 * @param req
 * @param res
 * @param next
 */
function update(req, res, next) {
    let id = req.body.id;

    let disponibilite = {
        profId: req.body.profId,
        dateDispo: req.body.dateDispo,
        heureDispoDebu: req.body.heureDispoDebu,
        heureDispoFin: req.body.heureDispoFin,

    };

    models.Disponibilite.update(disponibilite, {
        where: { id: id }
    }).then((updatedDisponibilite) => {
        return res.status(200).json(updatedDisponibilite);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}

module.exports = {
    getAll, getById, save, destroy, update,
};