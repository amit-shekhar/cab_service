class Trip{
  constructor(params){
    this.id = parseInt(Math.random()*100000);
    this.cab = params["cab"];
    this.start_location = params["start_location"];
    this.end_location = params["end_location"];
    this.status = "active";
    this.rider = params["rider"];
  }

  start(){
    this.cab.book();
    this.cab.rider = this.rider;
  }
  complete(cost){
    this.status = "completed";
    this.cost = cost;
    this.cab.free(this.end_location);
  }

}


module.exports = {
  new: function(params){
    return new Trip(params);
  }
}
