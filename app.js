var express = require('express');
var util = require('util');
var fs = require('fs');
var app = express();
app.use(express.logger());
var loki = require('lokijs');
var db = new loki('bloki.db');
var curSize = 0;
var dbFile = 'bloki.db';
const clientSessions = require('client-sessions');

// initialize the posts collection
var posts;
var stats;
// get db file size
fs.exists( db.filename, function(exists){
  if(!exists){
    console.log('File does not exist, init\'ing collection');

    posts = db.addCollection('posts','Post');
    return;
  } else {
    console.log('loading from file')
    // load the database from file
    db.loadDatabase(function(data){
      console.log(data);
      console.log(db.collections);
      posts = db.getCollection('posts');
    });
    console.log(db.collections);
  }
});

var loggedIn = false;
function no_op(){
  return;
};
// Configuration
app.configure(function(){
  app.set('views', __dirname + '/app');
  //app.set('view engine', 'jade');
  app.use(express.bodyParser({ uploadDir : './tmp'}));
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
  
  if(req.params.id !== undefined) {
    var id = parseInt(req.params.id);
    var p = posts.get(id);
    res.send(p);
  } else {
    res.send(posts.find());
  }
});

app.put('/post',function(req, res){
  var post = req.body;
  posts.insert(post);
  db.saveToDisk(no_op);

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

app.post('/upload',function(req, res){
  
  console.log(req.files);

  var imagespath = './app/images/' + req.files.image.name;
  fs.rename(req.files.image.path, imagespath, function(err){
    if(err){
      console.log('Error');
      console.log(err);
      res.send({error: 'Error uploading file.'});
      return;
    }
    console.log('Upload ok');
    fs.unlink(req.files.image.path, function(err){
      if(err){
        console.log('Failed removing file');
      }
      console.log('Temp file removed');
    })
    res.send( { path: '/images/' + req.files.image.name } );
  })
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
