var router = require('express').Router();
var database = require("./../database");



router.get("/available",function(request,response){
  response.status(200).send({available_cabs: database.Cabs.available()});
});


// TODO: Add cab create,update routes

module.exports = router;
