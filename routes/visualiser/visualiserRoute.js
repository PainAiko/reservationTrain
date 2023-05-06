const express = require('express');
const visualiserRoute = express.Router();
const visualiserController = require('../../controller/reservation/reservationController');
visualiserRoute.get('/:numTrain',visualiserController.VisualVoyageurParTrain);
module.exports = visualiserRoute;