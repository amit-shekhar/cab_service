var router = require('express').Router();

router.get("/",function(request,response){
  response.status(200).send("Cab");
});

router.get("/:id",request,response){
  
}

module.exports = router;
