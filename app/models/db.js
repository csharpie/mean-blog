var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/mean-blog';

mongoose.connect(dbURI);

//Require all of the models here
require('./post')