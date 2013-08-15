var express = require('express');
var util = require('util');
var fs = require('fs');
var app = express();
app.use(express.logger());
var loki = require('lokijs');
var db = new loki('Bloki');
var curSize = 0;
var dbFile = 'bloki.db';

// initialize the posts collection
var posts;
var stats;
// get db file size
fs.exists( dbFile, function(exists){
  if(!exists){
    posts = db.addCollection('posts','Post');
    return;
  } else {
    stats = util.inspect(fs.statSync( dbFile ));
    curSize = stats.size;
    // load the database from file
    loadDb();
  }
});



function saveDb(){
  fs.writeFile(dbFile, db.serialize(), function(err){
    if(err) throw err;
    var stats = util.inspect(fs.statSync( dbFile ));
    curSize = stats.size;
  });  
};

function loadDb(){
  var data = fs.readFileSync( dbFile, {encoding: 'utf8'});
  db.load(data);
  posts = db.collections[0];
  posts.indices.push( db.collections[0].idIndex );
  posts.ensureIndex('id');
  //posts.idIndex.data.sort();
  console.log(posts.indices);  
}


// Configuration
app.configure(function(){
  app.set('views', __dirname + '/app');
  //app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/app'));
  app.use(app.router);
  app.engine('html', require('ejs').renderFile);
});

app.get('/', function(request, response) {
  response.render('index.html')
});

app.get('/post/:id?', function(req, res){
	req.params.id ? res.send( posts.get(req.params.id) ) : res.send( posts.find() );
});

app.put('/post',function(req, res){
  var post = req.body;
  posts.insert(post);
  console.log(posts);
  fs.unlink( dbFile, saveDb );

  res.send(post);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
