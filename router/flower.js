var express=require('express');
var router=express.Router();
var Flower=require('../model/models.js');
var bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({extended:true}));

router.post('/add',function(req,res){
  //var name=req.body.Name;
var flower=new Flower(req.body);
flower.save(function(err,data){
  if(err)
    res.send(err);
  else {
    res.send(data);
  }
});
});
router.get('/display',function(req,res){
// var flower=new Flower(req.params.Name);
Flower.find({},function(err,data){
if(err)
  res.send(err);
else {
  res.send(data);
}
});
});

router.get('/findAndRemove/:id',function (req,res) {
  Flower.findByIdAndRemove({_id:req.params.id},function (err,data) {
    if(err)
      res.send(err);
    else {
      res.send(data);
    }
  })
});

router.put('/update/:id/:name',function (req,res) {
  Flower.update({_id:req.params.id},{$set:{Name:req.params.name}},function (err,data) {
    if(err)
      res.send(err);
    else {
      res.send(data);
    }
  })
});

router.delete('/delete',function (req,res) {
  Flower.remove({},function (err,data) {
    if(err)
      res.send(err);
    else {
      res.send(data);
      console.log("one row delete");
    }
  });
});
module.exports=router;
