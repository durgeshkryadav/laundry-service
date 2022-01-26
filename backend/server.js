const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require("body-parser");
const {mongo_url} = require('./config/db');
const app = express();
app.use(bodyParser());
app.use(cors());

// mongoose connection  ------------------------------------------------

mongoose.connect(mongo_url , {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log("Connected to mongoDB")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})

//      ------------------------------------------------------------------

require('./models/createOrder');
app.use(express.json());

app.use(require('./routes/createOrderLogic'))

app.listen(3000, ()=>{console.log('Listening on prt 3000')});