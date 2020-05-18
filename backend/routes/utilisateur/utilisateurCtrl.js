var models = require('../../models');

/**
 * Controller pour recuperer tous les utlilisateur
 * @param req
 * @param res
 * @param next
 */
function getAll(req, res, next) {
    models.utilisateur.findAll().then((utilisateur) => {
        //si je trouve pas de cours je retourne un status 404 avec un petit message
        if (!utilisateur)
            return res.status(404).json({
                message: 'aucun cours trouvé'
            });
        //si tout s'est bien passé je retourne le status 200 et les utilisateur  trouvé
        return res.status(200).json(utilisateur);
    }).catch((err) => {
        //Erreur serveur => envoie erreur 500 et message au client
        return res.status(500).json(err);
    })
}

/**
 * Controller pour recuperer un utilisateur par son id
 * @param req
 * @param res
 * @param next
 */
function getById(req, res, next) {
    let id = req.params.id;

    models.utilisateur.findByPk(id).then((utilisateurFound) => {
        return res.json(utilisateurFound)
    }).catch((err) => {
        return res.json(err);
    });
}

/**
 * Controller pour sauvegarder un utilisateur
 * @param req
 * @param res
 * @param next
 */
function save(req, res, next) {
    //recuperation des infos d un  utilisateur à creer
    let utilisateur_ = {
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        type: req.body.type
    };

    //insertion dans la base de données
    models.utilisateur.create(utilisateur_).then((newUtilisateur) => {
        if (!newUtilisateur) {
            return res.status(500).json({
                message: 'Une erreur est survenue lors de la création du cours'
            });
        }

        return res.status(201).json(newUtilisateur);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

/**
 * Controller pour supprimer un utilisateur par son id
 * @param req
 * @param res
 * @param next
 */
function destroy(req, res, next) {
    let utilisateur_id = req.params.id;

    models.utilisateur.destroy({
        where: {id: cours_id}
    }).then((destroyedutilisateur) => {
        return res.status(200).json(destroyedutilisateur);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

/**
 * Controller pour mettre à jour un utilisateur
 * @param req
 * @param res
 * @param next
 */
function update(req, res, next) {
    let id = req.body.id;
    let utilisateur = {
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        type: req.body.type
    };

    models.utilisateur.update(utilisateur, {
        where: { id: id }
    }).then((updatedutilisateur) => {
        return res.status(200).json(updatedutilisateur);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}

module.exports = {
    getAll, getById, save, destroy, update
};