var router = require('express').Router();
var database = require('./../database');
var conditions = require('./../conditions');
var models = require("./../models");
var Util = require("./../utils")

router.get("/:id",function(request,response){
  var trip_id = request.params.id;
  var trip = database.Trips.find(trip_id);
  if(trip == undefined){
    response.status(200).send({message: "Trip not found"});
  }else {
    response.status(200).send({trip: trip,message: "Success"});
  }
});


router.post("/book",function(request,response){

  var start_location = models.Location.new(request.body.start_location);
  var end_location = models.Location.new(request.body.end_location);
  var rider = database.Riders.find(request.body.rider_id);

  var available_cab = database.Cabs.find_available_cab(conditions,{start_location: start_location});

  if(rider == undefined){
    response.status(200).send({message: "Rider Not Found"});
  }else if(available_cab == undefined){
    response.status(200).send({message: "No cabs available"});
  }else{
    var trip = models.Trip.new({cab: available_cab,rider: rider,start_location: start_location,end_location: end_location});
    trip.start();
    database.Trips.add(trip);
    response.status(200).send({trip_id: trip.id,cab: trip.cab,message: "Successfully Completed"});
  }
});

router.post("/complete",function(request,response){
  var trip_id = request.body.trip_id;
  var trip  = database.Trips.find(trip_id);
  var end_location = request.body.end_location;

  if(trip !== undefined){
    var final_cost = Util.calculate_trip_price(trip.start_location,end_location);
    trip.complete(final_cost);
    response.status(200).send({trip_cost: trip.cost,cab: trip.cab,message: "Successfully Completed"});
  }else{
    response.status(200).send({message: "Not Found"});
  }
  // database.Trips.find(trip_id).complete();

});


module.exports = router;
