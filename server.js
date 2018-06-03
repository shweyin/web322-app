var express = require('express');
var dataService = require('C:/Users/Shweyin/Desktop/web322-app/data-service.js');
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
    dataService.getAllEmployees()
    .then(function(result)
    {
        res.json(result);
    })
    .catch(function(err){
        console.log(err);
    });
});
app.get('/managers', function(req, res)
{
    dataService.getManagers()
    .then(function(result)
    {
        res.json(result);
    })
    .catch(function(err){
        console.log(err);
    });
});
app.get('/departments', function(req, res)
{
    dataService.getDepartments()
    .then(function(result)
    {
        res.json(result);
    })
    .catch(function(err){
        console.log(err);
    });
});
app.get('*', function(req, res)
{
    res.send('Error 404: Sorry, this page does not exist(It would be awesome if it did though)', 404);
});
function onhttpstart(){
    console.log('server listening on port: ' + HTTP_PORT);
};

dataService.initialize()
.then(function()
{
    app.listen(HTTP_PORT, onhttpstart())
})
.catch(function(err){
    console.log(err);
});