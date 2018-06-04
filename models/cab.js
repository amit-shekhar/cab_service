class Cab{
  constructor(params){
    this.id = params["id"]
    this.model = params["model"];
    this.driver = params["driver"];
    this.number = params["number"];
    this.type = params["type"];
    this.location = params["location"];
    this.rider_id = null;
  }

  get_location(){
    return location;
  }

  set_location(location){
    this.location = Location.new(params["location"]);
  }

  free(location){
    this.location = location;
    this.available = true;
  }

  book(rider_id){
    this.available = false;
    this.rider_id = rider_id;
  }

}


module.exports = {
  new: function(params){
    return new Cab(params);
  }
}
