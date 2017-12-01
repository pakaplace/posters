var mongoose = require(‘mongoose’);
var Schema = mongoose.Schema;

var posterSchema = new Schema({
    img: { data: Buffer, contentType: String }
});