var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
 
// Connection URL
var url = 'mongodb://426team:posterboy$426@clusterfuck-shard-00-00-otcse.mongodb.net:27017,clusterfuck-shard-00-01-otcse.mongodb.net:27017,clusterfuck-shard-00-02-otcse.mongodb.net:27017/test?ssl=true&replicaSet=Clusterfuck-shard-0&authSource=admin';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
 
  db.close();
});