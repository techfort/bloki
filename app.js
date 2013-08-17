var express = require('express');
var util = require('util');
var fs = require('fs');
var app = express();
app.use(express.logger());
var loki = require('lokijs');
var db = new loki('Bloki');
var curSize = 0;
var dbFile = 'bloki.db';
const clientSessions = require('client-sessions');

// initialize the posts collection
var posts;
var stats;
// get db file size
fs.exists( dbFile, function(exists){
  if(!exists){
    console.log('File does not exist, init\'ing collection');

    posts = db.addCollection('posts','Post');
    return;
  } else {
    console.log('loading from file')
    // load the database from file
    db.loadDatabase( dbFile, function(data){
      console.log(data);
      console.log(db.collections);
      posts = db.getCollection('posts');
    });
    console.log(db.collections);
  }
});

var loggedIn = false;

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/app');
  //app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'odisdhjkasdoiuwerjkl12903nd9'}));
  app.use(express.static(__dirname + '/app'));
  app.use(app.router);
  app.engine('html', require('ejs').renderFile);
});

app.get('/', function(request, response) {
  response.render('index.html')
});

app.get('/post/:id?', function(req, res){
  console.log(posts);
	req.params.id ? res.send( posts.get(req.params.id) ) : res.send( posts.find() );
});

app.put('/post',function(req, res){
  var post = req.body;
  posts.insert(post);
  db.saveToDisk( dbFile, function(){});

  res.send(post);
});

app.post('/login',function(req, res){
  req.session.username = 'admin';
  console.log(req.session);
  res.send({loggedIn: true});
});

app.post('/loginstatus',function(req, res){
  res.send(loggedIn);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
