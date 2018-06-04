class Trip{
  constructor(params){
    this.id = params["id"];
    this.cab = params["cab"];
    this.start_location = params["start_location"];
    this.end_location = params["end_location"];
    this.status = "active";
  }

  complete(){
    this.status = "completed";
    this.cab.free();
  }

}


module.exports = {
  new: function(params){
    return new Trip(params);
  }
}
