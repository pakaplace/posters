var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser')

var imgPath = "./terry.jpg"
var MONGO_PASSWORD = process.env.MONGO_PASSWORD

// Schema is a structure of a particular document
var PosterSchema = new Schema({
    img: { data: Buffer, contentType: String },
    title: String,
    expirationDate: Date,
    uploadDate: Date
// Category
});
//Model defines a programming interface for interacting with the database (read, insert, write, update)
var Poster = mongoose.model('PosterSchema', PosterSchema);

var app = express();

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.use(function(req, res, next) {
    console.log('request', req.url, req.body, req.method);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-token");
    if(req.method === 'OPTIONS') {
        res.end();
    }
    else {
        next();
    }
});
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb'}));

//On server side, you will received base64 encoded image that you can easilly translate into binary with the Buffer constructor
// var buffer = new Buffer(data, 'base64');

//var buffer = new Buffer(data, 'base64');

app.get('/', function(req, res){
	res.render('testUpload')
})
app.get('/savePoster',(req,res)=>{
	console.log("11111111111111111111111111111111111")
	var base64Img = JSON.stringify(req.body.data);
	console.log('getbody1: ' + base64Img);
	res.send("GET request to save poster")
})

app.post('/savePoster', function(req, res){
	var base64Img = JSON.stringify(req.body.data);
	console.log('getbody1: ' + base64Img);
	//base64Img is stripped of data:image/jpeg;base64,+<base64code>
	//var imgBuffer = new Buffer(base64Img, 'base64')
	var poster = new Poster;
	poster.img.data = base64Img;
	poster.img.contentType = 'image/jpg';
	poster.save(function (err, poster) {
	  if (err) throw err;
	  Poster.find(poster, function (err, doc) {
	          if (err) return next(err);
	          console.log("DOC SAVED YO", doc)
	          // res.contentType(doc.img.contentType);
	          // res.send(doc.img.data);
	  });
	})
	res.send("Success message!!!");
})
//
app.listen(3000, () => console.log('Example app listening on port 3000!'))

// Connection URL
var url = 'mongodb://pakaplace:'+MONGO_PASSWORD+'@ds013414.mlab.com:13414/pakaplace'
// Use connect method to connect to the Server
mongoose.connect(url);

Poster.find(function(err, data){
	console.log(data);	
})
// var poster = new Poster;
// poster.img.data = fs.readFileSync(imgPath);
// poster.img.contentType = 'image/jpg';
// poster.save(function (err, poster) {
//   if (err) throw err;
//   Poster.find(poster, function (err, doc) {
//           if (err) return next(err);
//           console.log(doc)
//           // res.contentType(doc.img.contentType);
//           // res.send(doc.img.data);
//   });
// })


// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected correctly to server");
 
//   db.close();
// });