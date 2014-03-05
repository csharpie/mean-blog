var mongoose = require('mongoose'),
    ObjectId = mongoose.Types.ObjectId,
    Post = mongoose.model('Post');

// GET

exports.posts = function (req, res) {
    Post.find(function (err, posts) {
        res.json({
            posts: posts
        });
    });
};

exports.post = function (req, res) {
    var id = req.params.id;
    Post.findOne({_id: ObjectId(id)}, function (err, post) {
        res.json({
            post: post
        });
    });
};

// POST
exports.addPost = function (req, res) {
    var post = { title: req.body["title"], text: req.body["text"] };
    Post.create(post, function(err){

    });
    //post.save(function (err) {
    //});
    res.json(req.body);
};

// PUT
exports.editPost = function (req, res) {
    var id = req.params.id;
    var query = { _id: ObjectId(id) };
    var post = { title: req.body["title"], text: req.body["text"] };
    Post.update(query, post, function(err){
        console.log(err)
    });
    res.json(true);
};

// DELETE
exports.deletePost = function (req, res) {
    var id = req.params.id;

    console.log(id);

    Post.findOne({ _id: ObjectId(id) }).remove().exec();

    res.json(true);
};