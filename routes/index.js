var router = require('express').Router();
var bodyParser = require('body-parser');
var cab = require("./cab");
var driver = require("./driver");
var trip = require("./trip");
var rider = require("./rider");
var path = require("path");


router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.use("*",authenticate); // authenticate requests
router.use(error_handler);   // Error Handler


router.use("/cab",cab);
router.use("/driver",driver);
router.use("/trip",trip);
router.use("/rider",rider);

router.use("*",home);

//default response
function home(request,response){
  response.sendFile(path.join(__dirname + "./../public/index.html"));
}

// Method to authenticate requests
function authenticate(request,response,next){
  if(true) {
    next();
  } else {
    response.statusCode = 401;
    response.end('Access denied');
  }
}

// Method to handle errors
function error_handler(error,request,response,next){
  response.status(500).send("Something Broke !");
}


module.exports = router;
