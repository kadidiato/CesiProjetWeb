var models = require('../../models');
const {validationResult} = require('express-validator');

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
    let uid = req.params.id;
    models.Prof.findOne({
        where: {uid: uid}
    }).then((ProfesseurFound) => {
        if (!ProfesseurFound) {
            return res.status(404).json({
                status: 'error',
                message: `Prof non trouvé`
            });
        }
        return res.status(201).json(ProfesseurFound);
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

function getOrCreate(req, res, next) {

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
        uid: req.body.uid,
    };

    models.Prof.findOne({
        where: {uid: prof.uid}
    }).then((profFound) => {
        if (!profFound) {
            models.Prof.create(prof).then((newProf) => {
                if (!newProf) {
                    return res.status(500).json({
                        message: 'Une erreur est survenue lors de la création du prof'
                    });
                }
                return res.status(201).json(newProf);
            }).catch((err) => {
                return res.status(500).json({
                    status: 'error',
                    message: 'Une erreur interne est survenue lors de la recuperation du prof ',
                    details: err.errors
                });
            })

        } else {
            return res.status(200).json(profFound);
        }
    })
}

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
        uid: req.body.uid,
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
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(422).json({errors: errors.array()});
        return;
    }

    let prof = {
        id: req.body.id,
        uid: req.body.uid,
        nomProf: req.body.nomProf,
        prenomProf: req.body.prenomProf,
        mailProf: req.body.mailProf,
        matiereProf: req.body.matiereProf,
        nbAvisPos: req.body.nbAvisPos,
        nbAvisNeg: req.body.nbAvisNeg,
        niveauEProf: req.body.niveauEProf,
        rueProf: req.body.rueProf,
        villeProf: req.body.villeProf,
        zipProf: req.body.zipProf,
        paysProf: req.body.paysProf,

    };
    models.Prof.findByPk(prof.id).then((profFound) => {
        if (!profFound) {
            return res.status(404).json({
                status: 'error',
                message: `Aucun client trouvé avec l'identifiant ` + prof.id
            })
        }

        profFound.update(prof).then((profUpdated) => {
            if (profUpdated) {
                return res.status(200).json(profUpdated);
            } else {
                return res.status(403).json({
                    status: 'error',
                    message: `Impossible de mettre à jour le prof`
                })
            }
        }).catch((err) => {
            console.error(err);
            return res.status(500).json({
                    status: 'error',
                    message: 'Une erreur interne est survenue lors de la mise à jour du prof',
                    details: err.errors
                }
            );
        });
    }).catch((err) => {
        console.error(err);
        return res.status(500).json({
            status: 'error',
            message: 'Une erreur interne est survenue lors de la récupération du prof',
            details: err.errors
        });
    });

}

module.exports = {
    getAll, getById, save, destroy, update, getOrCreate
};