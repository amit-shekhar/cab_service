class Rider{
  constructor(params){
    this.id = params["id"];
    this.name = params["name"];
    this.phone_no = params["phone_no"];
    this.rating = params["rating"];
  }
}


module.exports = {
  new: function(params){
    return new Rider(params);
  }
}
