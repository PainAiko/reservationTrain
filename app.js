const express = require('express');
const app = express();
const equipeRoute =require('./routes/equipe/index');
const temoinsRoute =require('./routes/temoins/index');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const router = express.Router()
const cors = require("cors")
app.use(bodyParser.json());
/*app.use((req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    next();
})*/
app.use(cors())
//app.use('/teams',equipeRoute);
app.use('/temoins',temoinsRoute)
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
sequelize.sync().then(result => {
    app.listen(4000)
 }).catch(err=> console.log(err));

 