var models = require('../../models');
const {validationResult} = require('express-validator');

/**
 * Controller pour recuperer tous les cours
 * @param req
 * @param res
 * @param next
 */
function getAll(req, res, next) {
    models.Cours.findAll().then((cours) => {
        //si je trouve pas de cours je retourne un status 404 avec un petit message
        if (!cours)
            return res.status(404).json({
                message: 'aucun cours trouvé'
            });
        //si tout s'est bien passé je retourne le status 200 et le cours trouvé
        return res.status(200).json(cours);
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

    models.Cours.findByPk(id).then((courFound) => {
        return res.json(courFound)
    }).catch((err) => {
        return res.json(err);
    });
}

function getByProfId(req, res, next){
    let profId=req.params.id;
    models.Cours.findAll({
        where: {
          profId: profId,
        }
      });

}

/**
 * Controller pour sauvegarder un cours
 * @param req
 * @param res
 * @param next
 */
function save(req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(422).json({errors: errors.array()});
        return;
    }
    //recuperation des infos du cours à creer
    let cours = {
        ProfId: req.body.profId,
        dateCour: req.body.dateCour,
        heureCour: req.body.heureCour || null,
        matiere: req.body.matiere,
        description: req.body.description,
    };

    models.Prof.findOne({
        where: {id: cours.ProfId}
    }).then((profFound) => {
        if (profFound) {
            models.Cours.create(cours).then((newCours) => {
                if (newCours) {
                    return res.status(201).json(newCours);
                } else {
                    return res.status(500).json({
                        message: 'Une erreur est survenue lors de la création du cours'
                    });
                }
            }).catch((err) => {
                console.error(err);
                return res.status(500).json({
                    status: 'error',
                    message: err.errors
                });
            });
        } else {
            return res.status(404).json({
                status: 'error',
                message: `Aucun prof trouvé avec l'identifiant ` + cours.ProfId
            })
        }
    }).catch((err) => {
        console.error(err);
        return res.status(500).json({
            status: 'error',
            message: err.errors
        });
    });

}

/**
 * Controller pour supprimer un cours par son id
 * @param req
 * @param res
 * @param next
 */
function destroy(req, res, next) {
    let cours_id = req.params.id;

    models.Cours.destroy({
        where: {id: cours_id}
    }).then((destroyedCours) => {
        return res.status(200).json(destroyedCours);
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
    let cours = {
        dateCour: req.body.dateCour,
        heureCour: req.body.heureCour,
        // EleveId: req.body.eleveId,
        ProfId: req.body.profId,
        matiere: req.body.matiere,
        description: req.body.description,
    };

    models.Cours.update(cours, {
        where: {id: id}
    }).then((updatedCours) => {
        return res.status(200).json(updatedCours);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}

module.exports = {
    getAll, getById, save, destroy, update
};