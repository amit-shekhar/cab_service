module.exports.distance_between_points = function(a,b){
  return Math.sqrt( ((a.lat - b.lat)*(a.lat - b.lat)) + ((a.lon - b.lon)*(a.lon - b.lon)))
}
