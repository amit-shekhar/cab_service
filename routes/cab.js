var router = require('express').Router();

router.get("/",function(request,response){
  response.status(200).send("Cab");
});


module.exports = router;
