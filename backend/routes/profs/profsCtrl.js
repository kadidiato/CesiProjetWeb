var models = require('../../models');

/**
 * Controller pour recuperer tous les professeurs
 * @param req
 * @param res
 * @param next
 */
function getAll(req, res, next) {
    models.Prof.findAll().then((prof) => {
        //si je trouve pas de cours je retourne un status 404 avec un petit message
        if (!prof)
            return res.status(404).json({
                message: 'aucun professeur trouvé'
            });
        //si tout s'est bien passé je retourne le status 200 et le cours trouvé
        return res.status(200).json(prof);
    }).catch((err) => {
        //Erreur serveur => envoie erreur 500 et message au client
        return res.status(500).json(err);
    })
}

/**
 * Controller pour recuperer un professeur  par son id
 * @param req
 * @param res
 * @param next
 */
function getById(req, res, next) {
    let id = req.params.id;

    models.Prof.findByPk(id).then((ProfesseurFound) => {
        return res.json(ProfesseurFound)
    }).catch((err) => {
        return res.json(err);
    });
}

/**
 * Controller pour sauvegarder un ele
 * @param req
 * @param res
 * @param next
 */
function save(req, res, next) {
    //recuperation des infos du cours à creer
    let prof = {
        nomProf: req.body.nomProf,
        prenomProf: req.body.prenomProf,
        mailProf: req.body.mailProf,
        matiereProf: req.body.matiereProf,
        // a enlever cette parti pour faire la table nottation
        nbAvisPos: req.body.nbAvisPos,
        nbAvisNeg: req.body.nbAvisNeg,
        //
        niveauEProf: req.body.niveauEProf,
        rueProf: req.body.rueProf,
        villeProf: req.body.villeProf,
        zipProf: req.body.zipProf,
        paysProf: req.body.paysProf,

    };

    //insertion dans la base de données
    models.Prof.create(prof).then((newProf) => {
        if (!newProf) {
            return res.status(500).json({
                message: 'Une erreur est survenue lors de l insertion du prof'
            });
        }

        return res.status(201).json(newProf);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

/**
 * Controller pour supprimer un eleve par son id
 * @param req
 * @param res
 * @param next
 */
function destroy(req, res, next) {
    let pof_id = req.params.id;

    models.Prof.destroy({
        where: {id: pof_id}
    }).then((destroyedProf) => {
        return res.status(200).json(destroyedProf);
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
    let prof = {
        nomProf: req.body.nomProf,
        prenomProf: req.body.prenomProf,
        mailProf: req.body.mailProf,
        matiereProf: req.body.matiereProf,
        // a enlever cette parti pour faire la table nottation
        nbAvisPos: req.body.nbAvisPos,
        nbAvisNeg: req.body.nbAvisNeg,
        //
        niveauEProf: req.body.niveauEProf,
        rueProf: req.body.rueProf,
        villeProf: req.body.villeProf,
        zipProf: req.body.zipProf,
        paysProf: req.body.paysProf,

    };

    models.Prof.update(prof, {
        where: {id: id}
    }).then((updatedProf) => {
        return res.status(200).json(updatedProf);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}

module.exports = {
    getAll, getById, save, destroy, update,
};