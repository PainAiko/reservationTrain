const Equipe = require("../../models/Equipe");

exports.postAddEquipe = async(req,res,next) => {
    let nom = req.body.nom;
    let image = req.body.image;
    let description = req.body.description;
    let equipe = await Equipe.create({nom:nom, image:image,description:description})
   // console.log(train);
    res.json(equipe);
    
}

exports.getAllEquipe = async(req,res,next) => {
    let equipes = await Equipe.findAll();
    res.json(equipes);
}

exports.getEquipe = async(req,res,next) =>{
    let equipe  =await Train.findOne({
        where: {
            idEquipe: req.params.idEquipe
        }
    });
     res.json(equipe);
}

exports.deleteEquipe = async (req,res,next) => {
    let equipe = await Train.destroy({
        where: {
            idEquipe: req.params.idEquipe
        }
    });
    res.json(equipe);
    
}

exports.updateTrain = async (req,res,next) => {
    let equipe = await Train.findOne({
        where: {
            idEquipe: req.params.idEquipe
        }
    });
   
    equipe.nom = req.body.nom;
    equipe.image = req.body.image;
    equipe.description = req.body.description;
    let equipeUp= await equipe.save();
    //console.log((trainUpdate));
    res.json({equipe: equipeUp});
}

