const Train = require("../../models/train/Train");

exports.postAddTrain = async(req,res,next) => {
    let design = req.body.design;
    let itineraire = req.body.itineraire;
    /*Train.create(
        {design:design, itineraire:itineraire}
    ).then(result =>{
        //console.log(result.dataValues);
        console.log("");
        res.json(result.dataValues)
    }).catch(err => console.log(err));*/
    let train = await Train.create({design:design, itineraire:itineraire})
   // console.log(train);
    res.json(train);
    
}

exports.getAllTrain = async(req,res,next) => {
    /*Train.findAll().then(result =>{
        console.log(result);
        res.status(200).json({train: result});
    }).catch(err => console.log(err)); */

    let trains = await Train.findAll();
    res.json(trains);
}

exports.getTrain = async(req,res,next) =>{
    let train  =await Train.findOne({
        where: {
            numTrain: req.params.numTrain
        }
    });
     res.json(train);
}

exports.deleteTrain = async (req,res,next) => {
    let train = await Train.destroy({
        where: {
            numTrain: req.params.numTrain
        }
    });
    // DELETE FROM trains WHERE  numTrain= req.params.numTrain;
    res.json(train);
    
}

exports.updateTrain = async (req,res,next) => {
    let train = await Train.findOne({
        where: {
            numTrain: req.params.numTrain
        }
    });
   
    train.design = req.body.design;
    train.itineraire = req.body.itineraire;
    let trainUpdate= await train.save();
    //console.log((trainUpdate));
    res.json({train: trainUpdate});
    
}

