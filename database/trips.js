class Trips{
  constructor(){
    if(this.trips == undefined || this.trips.size == 0){
      this.trips = []
    }
  }

  add(trip){
    this.trips.push(trip);
  }

  remove(trip_id){
    to_destroy = this.trips.findIndex(function(trip){ return trip.id == trip_id; });
    if(to_destroy > -1){
      this.trips.splice(to_destroy);
      return true;
    }else {
      return false;
    }
  }

  find(trip_id){
    return this.trips.find(function(trip){ return trip.id == trip_id; });
  }
}


module.exports = new Trips();
