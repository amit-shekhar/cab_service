class Cabs{
  constructor(){
    if(this.cabs == undefined || this.cabs.size == 0){
      this.cabs = []
    }
  }

  add(cab){
    this.cabs.push(cab);
  }

  remove(cab_id){
    var to_destroy = this.cabs.findIndex(function(cab){ return cab.id == cab_id; });
    if(to_destroy > -1){
      this.cabs.splice(to_destroy);
      return true;
    }else {
      return false;
    }
  }

  find(cab_id){
    return this.cabs.find(function(cab){ return cab.id == cab_id; });
  }

  update_available(cab_id,new_available){
    var to_update = this.cabs.findIndex(function(cab){ return cab.id == cab_id; });
    if(to_update > -1){
      this.cabs[to_update].available = new_available;
    }else {
      return false;
    }
  }

  update_location(cab_id,new_location){
    var to_update = this.cabs.findIndex(function(cab){ return cab.id == cab_id; });
    if(to_update > -1){
      this.cabs[to_update].location = new_location;
    }else {
      return false;
    }
  }

}

module.exports = new Cabs();
