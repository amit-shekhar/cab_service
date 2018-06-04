var router = require('express').Router();
var database = require('./../database');
var conditions = require('./../conditions');

router.get("/",function(request,response){
  response.status(200).send("trip");

});


router.post("/book",function(request,response){
  var start_location = models.Location.new(request.params.start_location);
  var end_location = models.Location.new(request.params.end_location);
  var rider = database.Riders.find(request.params.rider_id);

  var available_cab = database.Cabs.find_available_cab(conditions,{start_location: start_location});

  if(available_cab != undefined){
    var trip = models.Trip.new({cab: available_cab,rider: rider,start_location: start_location,end_location: end_location})
    response.status(200).send({trip_id: trip.id,message: "Successfully Completed"});
  }else{
    response.status(200).send({message: "No cabs available"});
  }

});

router.post("/complete",function(request,response){
  var trip_id = request.trip_id;
  database.trips.find(trip_id).complete();
  response.status(200).send({message: "Successfully Completed"});
});


module.exports = router;
