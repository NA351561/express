var express = require('express');
var app = express();

var bodyParser=require('body-parser');
var config = require('../config/config');

// var myDefaultFun = function(req,res,next){

//     console.log("Default fn is called");

//     next();

// }

var User=require('../router/user');
//var Admin=require('./router/')

var mongoose=require('mongoose');

var db = 'mongodb://localhost/centralcity';

mongoose.connect(db);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {

    console.log("connnected with mongo");

});

app.use(bodyParser.urlencoded({extended:true}));



app.use('/user',User);
var Flower=require('../router/flower');
app.use('/adding',Flower);



//app.use(express.static('./'))



// app.get('/use',function(req,res){
//
//     res.send({"response":"Get is called"});
//
// })
//
// app.post('/post',function(req,res){
//
//     res.send({"response":"post is called"+req.body.value});
//
// })

// app.get('/userdata/:name/:val',function(req,res){

//   res.send({"response":"Get username is called"+req.params.name});

// })


app.listen(config.port,function(){

    console.log("server started at 8080");

})
