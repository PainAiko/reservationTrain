const express = require('express');
const app = express();
const trainRoute =require('./routes/Train/trainRoute');
const voyageurRoute = require('./routes/voyageur/voyageur');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');

app.use(bodyParser.json());
app.use('/train',trainRoute);
app.use('/voyageur',voyageurRoute);
sequelize.sync().then(result => {
    //console.log(result)
    app.listen(8081);
 }).catch(err=> console.log(err));
