class Cab{
  constructor(params){
    this.id = params["id"]
    this.model = params["model"];
    this.driver = params["driver"];
    this.number = params["number"];
    this.location = params["location"];
  }

  get_location(){
    return location;
  }

  set_location(location){
    this.location = Location.new(params["location"]);
  }

  free(location){
    this.location = loation;
    this.available = true;
  }

}


module.exports = {
  new: function(params){
    return new Cab(params);
  }
}
