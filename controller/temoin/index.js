const temoins = require("../../data/temoins");

exports.getTemoins = async(req,res,next) => {
    res.json(temoins)
}