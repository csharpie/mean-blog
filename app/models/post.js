var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var postSchema = new Schema({
    title: String,
    text: String
});

var Post = module.exports = mongoose.model('Post', postSchema);