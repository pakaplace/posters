var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var express = require('express');
var fs = require('fs');

var imgPath = "./terry.jpg"

// Schema is a structure of a particular document
var PosterSchema = new Schema({
    img: { data: Buffer, contentType: String }
});
//Model defines a programming interface for interacting with the database (read, insert, write, update)
var Poster = mongoose.model('PosterSchema', PosterSchema);
var app = express();
 
// Connection URL
var url = 'mongodb://426team:posterboy$426@clusterfuck-shard-00-00-otcse.mongodb.net:27017,clusterfuck-shard-00-01-otcse.mongodb.net:27017,clusterfuck-shard-00-02-otcse.mongodb.net:27017/test?ssl=true&replicaSet=Clusterfuck-shard-0&authSource=admin';
// Use connect method to connect to the Server
mongoose.connect(url);

// var poster = new Poster;
// poster.img.data = fs.readFileSync(imgPath);
// poster.img.contentType = 'image/png';
// poster.save(function (err, poster) {
//   if (err) throw err;
//   Poster.findById(poster, function (err, doc) {
//           if (err) return next(err);
//           console.log(doc)
//           // res.contentType(doc.img.contentType);
//           // res.send(doc.img.data);
//   });
// })
Poster.findById(poster, function (err, doc) {
          if (err) return next(err);
          console.log(doc)
          // res.contentType(doc.img.contentType);
          // res.send(doc.img.data);
  });
// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected correctly to server");
 
//   db.close();
// });