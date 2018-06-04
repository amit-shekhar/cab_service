var router = require('express').Router();
var database = require("./../database");


router.get("/:id",function(request,response){
  var cab_id = request.params.id;
  var cab = database.Cabs.find(trip_id);
  if(cab == undefined){
    response.status(200).send({message: "Cab not found"});
  }else {
    response.status(200).send({cab: cab,message: "Success"});
  }
});


router.get("/available",function(request,response){
  response.status(200).send({available_cabs: database.Cabs.available()});
});


// TODO: Add cab create,update routes

module.exports = router;
