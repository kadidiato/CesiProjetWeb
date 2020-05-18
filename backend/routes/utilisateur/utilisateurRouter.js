var express = require('express');
var router = express.Router();
var utilisateurCtrl = require('./utilisateurCtrl');
var validerutilisateur = require('./validerutilisateur');

//recuperer tous les utilisateur
//url: GET /api/utilisateur
router.get('/', validerutilisateur.getAll(), validerutilisateur.validate, utilisateurCtrl.getAll);


//route qui gère la recuperation d'un utilisateur par id
//url: GET /api/utilisateur/:id
router.get('/:id', validerutilisateur.getById(), validerutilisateur.validate, utilisateurCtrl.getById);

//route pour créer un utilisateur
//url: POST /api/utilisateur

//router.post('/', validerutilisateur.save(), validerutilisateur.validate, utilisateurCtrl.save)
router.post('/', validerutilisateur.save(), validerutilisateur.validate, utilisateurCtrl.save);


router.put('/', validerutilisateur.save(), validerutilisateur.getById(), validerutilisateur.validate, utilisateurCtrl.update);

module.exports = router;