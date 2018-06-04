var express = require("express");
var http = require("http");
var path = require("path");
var bodyParser = require('body-parser');
var config = require('./config');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.resolve('./public')));


// SETUP SERVER //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var server = http.createServer(app);
server.listen(config.PORT,function(){
  console.log("Server listening on port:%d .........  ",config.PORT);

});
