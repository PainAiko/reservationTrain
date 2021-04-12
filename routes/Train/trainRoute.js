const express = require('express'); 
const router = express.Router();
const trainController = require('../../controller/train/trainController');

router.get('/', trainController.getAllTrain);
router.post('/', trainController.postAddTrain);
router.get('/:numTrain',trainController.getTrain);
router.delete('/:numTrain',trainController.deleteTrain);
router.put('/:numTrain',trainController.updateTrain);
module.exports = router;