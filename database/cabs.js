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

  available(){
    return this.cabs.filter(function(cab){
      return cab.available == true;
    })
  }

  find_available_cab(conditions,params){
    var available_cabs = this.cabs;
    conditions.forEach(function(condition){
      available_cabs = available_cabs.filter(function(cab){
        return condition(cab,params);
      });
    });
    return available_cabs[0];
  }

}

module.exports = new Cabs();
