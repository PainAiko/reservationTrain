const Train = require('../../models/train/Train');
const VoyageurModel = require('../../models/voyageur/Voyageur');

exports.getAllVoyageurs = async(req,res, next) =>{
    const voyageurs = await VoyageurModel.findAll();
    res.json(voyageurs);
}

exports.addVoyageur = async(req,res, next) =>{
    nomVoyageur = req.body.nomVoyageur;
    const voyageur = await VoyageurModel.create({nomVoyageur: nomVoyageur});
    res.json(voyageur);
}

exports.getVoyageur = async(req,res, next) =>{
    const voyageur= await VoyageurModel.findOne({
        where:{
            numVoyageur:req.params.numVoyageur
        }
    });
    res.json(voyageur);
}

exports.deleteVoyageur = async(req,res,next) =>{
    const voyageur =await VoyageurModel.destroy({
        where:{
            numVoyageur:req.params.numVoyageur
        }
    });
    res.json(voyageur);
}

exports.updateVoyageur = async(req,res,next) => {
    const voyageur = await VoyageurModel.findOne({
        where:{
            numVoyageur:req.params.numVoyageur
        }
    });
    voyageur.nomVoyageur = req.body.nomVoyageur;
    const voyageurUpd = await voyageur.save();
    res.json( voyageurUpd);
}