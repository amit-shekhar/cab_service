class Location{
  constructor(location){
    this.lat = location["lat"];
    this.lon = location["lon"]
  }
}


module.exports = {
  new: function(location){
    return new Location(location);
  }
}
