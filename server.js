var express = require('express');
var mydata = require('data-service.js');

var app = express();

var HTTP_PORT = process.env.PORT || 8080;
 
app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendfile('views/home.html');
});
app.get('/home', function(req, res){
    res.sendfile('views/home.html');
});
app.get('/about', function(req, res)
{
    res.sendfile('views/about.html');
});
app.get('/employees', function(req, res)
{
    res.send('TODO: /employees get');
});
app.get('/managers', function(req, res)
{
    res.send('TODO: /managers get');
});
app.get('/departments', function(req, res)
{
    res.send('TODO: /departments get');
});
app.get('*', function(req, res)
{
    res.send('Sorry, this page does not exist(It would be awesome if it did though)', 404);
});
function onhttpstart(){
    console.log('server listening on port: ' + HTTP_PORT);
};
app.listen(HTTP_PORT, onhttpstart);