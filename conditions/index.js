var Util = require("./../utils");
var config = require("./../config");


var available = function(cab,params){
  return cab.available == true;
}

vicinity_check = function(cab,params){
  var start_location = params["start_location"];
  return Util.distance_between_points(cab.start_location,start_location) < config.MAX_RIDER_CAB_DISTANCE;
}

module.exports = [
  available,
  vicinity_check
]
