var config = require("./../config");

function distance_between_points(a,b){
  return Math.sqrt( ((a.lat - b.lat)*(a.lat - b.lat)) + ((a.lon - b.lon)*(a.lon - b.lon)));
}

module.exports.distance_between_points = distance_between_points;

module.exports.calculate_trip_price = function(start,end,other_parameters){
  return distance_between_points(start,end) * config.PER_KM_PRICE;
}
