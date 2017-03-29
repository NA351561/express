var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var FlowerSchema=new Schema({
  Name : String,
  Price : Number
});
module.exports=mongoose.model('Flower',FlowerSchema);
