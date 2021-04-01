const express = require('express');
let route = require('./routes.js');
let axios = require('axios')
var bodyParser = require('body-parser');
require('./config/mongoose');
const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended : true }))


app.use('/v1',route);
app.listen(3000,()=>{
    console.log("Server running successfully");
});

module.exports = app;
