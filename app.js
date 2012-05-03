
/**
 * Module dependencies.
 */

var express = require('express')
  , models = require("./models/Models.js")
  , routes = require('./routes');

var newFriend = new models.Friend({ name: "Freddy Farmer" });
var friendList = new models.Friends();
friendList.add(newFriend);
console.log("We now have " + friendList.length + " friends.")

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', { layout: false, pretty: true });
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/friends', routes.friends);
app.post('/friends', routes.saveFriends);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
