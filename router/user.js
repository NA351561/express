var express = require('express');
var router  = express.Router();


router.get('/na',function (req,res) {
  console.log('user data');
  res.send("user data get called");
});
module.exports=router;
