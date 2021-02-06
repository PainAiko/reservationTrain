const express = require('express'); 
const router = express.Router();


router.get('/', (req, res) => {
      res.status(200).json([{
          "num":"0122MP",
          "nom":"Rakoto fra"},
          {"num":"0754J",
          "nom":"Doda"},{
            "num":"011M",
            "nom":"Dembouz"
          }
    ]);
});

module.exports = router;