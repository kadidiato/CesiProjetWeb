var express = require('express');

// declaration des routes
const coursRouter = require('./cours/coursRouter');
const eleveRouter = require('./eleves/elevesRouter');
const reservationCoursRouter = require('./reservationsCours/reservationCoursRouter');
const profsRouter = require('./profs/profsRouter');
const disponibilitesRouter = require('./disponibilite/disponibilitesRouter');
//const utilisateurRouter = require('./utilisateur/utilisateurRouter');

exports.router = (function () {
    var apiRouter = express.Router();

    apiRouter.use('/cours', coursRouter);
    apiRouter.use('/eleves', eleveRouter);
    apiRouter.use('/reservationsCours', reservationCoursRouter);
    apiRouter.use('/profs', profsRouter);
    apiRouter.use('/disponibilites', disponibilitesRouter);
    //apiRouter.use('/utilisateur', utilisateurRouter);

    return apiRouter;
})();