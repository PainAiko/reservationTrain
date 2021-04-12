const express = require('express');
const voyageurRoute = express.Router();
const voyageurController = require('../../controller/voyageur/voyageurController');
voyageurRoute.get('/',voyageurController.getAllVoyageurs);
voyageurRoute.post('/',voyageurController.addVoyageur);
voyageurRoute.get('/:numVoyageur',voyageurController.getVoyageur);
voyageurRoute.delete('/:numVoyageur',voyageurController.deleteVoyageur);
voyageurRoute.put('/:numVoyageur',voyageurController.updateVoyageur);
module.exports = voyageurRoute;