const express = require('express'); 
const router = express.Router();
const equipeController = require('../../controller/equipe/index');

router.get('/', equipeController.getAllEquipe);
/*router.post('/', equipeController.postAddEquipe);
router.get('/:idEquipe',equipeController.getEquipe);
router.delete('/:idEquipe',equipeController.deleteEquipe);
router.put('/:idEquipe',equipeController.updateTrain);*/
module.exports = router;