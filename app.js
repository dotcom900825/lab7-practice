var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')


//I forgot what I should put here for the right path to include my controller code.
var index = require('./path_placeholder/index');
var add = require('./path_placeholder/add')

var app = express();

app.set('port', process.env.PORT || 3000);

/*
 I'd like to setup my default view files search path as "templates", but something wrong
 with my project's folders, can you help me fix it? By the way, I have put all the handlebars 
 file in the "public" folder if that helps.
 */
app.set('views', path.join(__dirname, 'templates'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

/*
  When I try to visit the localhost:3000, there is a server error complaining about 
  .get() requires callback function but got a [object Undefined], I am not sure what's going 
  on here, I did some code change in the controllers/index.js file, can you help me fix this?
*/
app.get('/', index.view);

app.get('/add/:friend_id/:category', add.addFriend);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
