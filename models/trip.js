class Trip{
  constructor(params){
    this.id = parseInt(Math.random()*100000);
    this.cab = params["cab"];
    this.start_location = params["start_location"];
    this.end_location = params["end_location"];
    this.status = "active";
  }

  complete(){
    this.status = "completed";
    this.cab.free(this.end_location);
  }

}


module.exports = {
  new: function(params){
    return new Trip(params);
  }
}
