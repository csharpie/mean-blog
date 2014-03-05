 require('./app/models/db')

/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , api = require('./app/controllers/api')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

//Routes

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON Mongoose API

app.get('/api/posts', api.posts);

app.get('/api/post/:id', api.post);

app.post('/api/post', api.addPost);

app.put('/api/post/:id', api.editPost);

app.delete('/api/post/:id', api.deletePost);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
