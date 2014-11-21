
// BASE SETUP
var express = require('express')
var app = express();
var router = express.Router();
var port = process.env.PORT || 5000
var path = require('path');
var pub = __dirname;

app.use(express.static(__dirname + '/public'));

app.set('views', pub);

app.set('view engine', 'jade');

app.get('/', function(req,res){
  res.render('./views/index', { title: "Jon and Xiao's wedding site" });
});

// catch 404
app.use(function(req, res, next) {
  var error = new Error('Not Found');
  error.status = 404;
  next(error);
})


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


app.listen(port, function(req, res) {
  console.log("Node app is running at localhost:" + port)
})

module.exports = app;
