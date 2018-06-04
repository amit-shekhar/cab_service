class Driver{
  constructor(params){
    this.id = params["id"];
    this.name = params["name"];
    this.rating = params["rating"];
  }
}


module.exports = {
  new: function(params){
    return new Driver(params);
  }
}
