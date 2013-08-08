var express = require("express");
 
var app = express();
app.use(express.logger());
var loki = require('lokijs');
var db = new loki('Bloki');
var posts = db.addCollection('posts', 'Post');
posts.document({ title: 'First Post', content: '# First Bloki\n\nsome awesome post', date : new Date()});
posts.document({ title: 'Second Post', content: '# Second Bloki\n\nsome awesome post', date : new Date()});
posts.document({ title: 'Third Post', content: '# Third Bloki\n\nsome awesome post', date : new Date()});
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
	req.params.id ? res.send( posts.get(id) ) : res.send( posts.find() );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});