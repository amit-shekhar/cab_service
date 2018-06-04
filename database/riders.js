class Riders{
  constructor(){
    if(this.riders == undefined || this.riders.size == 0){
      this.riders = []
    }
  }

  add(rider){
    this.riders.push(rider);
  }

  remove(rider_id){
    var to_destroy = this.riders.findIndex(function(rider){ return rider.id == rider_id; });
    if(to_destroy > -1){
      this.riders.splice(to_destroy);
      return true;
    }else {
      return false;
    }
  }

  find(rider_id){
    return this.riders.find(function(rider){ return rider.id == rider_id; });
  }
}


module.exports = new Riders();
