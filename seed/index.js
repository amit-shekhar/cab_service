var models = require("./../models");
var database = require("./../database");


module.exports.run = function(){
  database.Cabs.add(models.Cab.new({id: 1,type: "Go",model: "Indigo",number: "UP123",driver: models.Driver.new({id: 1,name: "Amit",rating: 5,phone_no: "8809328438"}),location: models.Location.new({lat: 1,lon: 2})}));
  database.Cabs.add(models.Cab.new({id: 2,type: "Go",model: "Swift",number: "UP151",driver: models.Driver.new({id: 2,name: "Amar",rating: 5,phone_no: "88129328438"}),location: models.Location.new({lat: 4,lon: 2})}));
  database.Cabs.add(models.Cab.new({id: 3,type: "Go",model: "Accent",number: "UP991",driver: models.Driver.new({id: 3,name: "Akbar",rating: 4,phone_no: "1414128438"}),location: models.Location.new({lat: 8,lon: 3})}));
  database.Cabs.add(models.Cab.new({id: 4,type: "Go",model: "BMW",number: "KA414",driver: models.Driver.new({id: 4,name: "Anthony",rating: 5,phone_no: "5151128438"}),location: models.Location.new({lat: 1,lon: 9})}));

  database.Riders.add(models.Rider.new({id: 1,name: "Amit",rating: 5,phone_no: "8809328438"}));
  database.Riders.add(models.Rider.new({id: 3,name: "Abhi",rating: 5,phone_no: "8809328438"}));
}
