var express = require('express');
var app = express();
var bodyParser=require('body-parser');
var config=require('../config/config');

app.use(bodyParser.urlencoded({extended:true}));

// app.get('/user/:id', function (req, res, next) {
//   // if the user ID is 0, skip to the next route
//   if (req.params.id === '0') next('route')
//   // otherwise pass the control to the next middleware function in this stack
//   else next()
// }, function (req, res, next) {
//   // render a regular page
//   res.render('regular')
// })
//
// // handler for the /user/:id path, which renders a special page
// app.get('/user/:id', function (req, res, next) {
//   res.render('special')
// })


// app.get('/',function (req,res) {
//   console.log("app get is called");
//   res.send({"response":"Get is called"});
// });
 // app.put('/user/:name/:value',function (req,res) {
 //   res.send('hello World!!!'+req.params.name+req.params.value);
 // });

//  var user=require('../router/user.js');
//  app.use('/nandini',user);


// var r1 = express.Router();
// r1.get('/', function (req, res,next) {
//   console.log('hai r1');
//   next();
// });
//
// var r2 = express.Router();
// r2.get('/', function (req, res,next) {
//   console.log('hai r2');
//   next();
// });
//
// app.use(r1, r2);

var mongoose=require('mongoose');
mongoose.connect(config.URL);
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function callback(){
  console.log('data base connected');
});

var flower=require('../router/flower.js');
app.use('/adding',flower);

app.use(express.static('./'));
app.listen(config.port,function () {
  console.log("server 8080");
});
