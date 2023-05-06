const express = require('express'); 
const router = express.Router();
const temoinsController = require('../../controller/temoin/index')
router.get('/', temoinsController.getTemoins);

module.exports = router