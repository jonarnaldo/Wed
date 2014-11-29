
// BASE SETUP
var express = require('express');
var url = require('url');
var app = express();
// var router = express.Router();
var port = process.env.PORT || 5000
var path = require('path');
var pub = __dirname;

app.use(express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'jade');

// ROUTES
app.get('/', function(req,res){
  res.render('index', { title: "Jon and Xiao's wedding site" });
});

app.get('*', function (req,res,next) {
  var err = new Error();
  err.status = 404;
  next(err);
});

// catch 404
app.use(function(err, req, res, next) {
  if(err.status !== 404) {
    return next();
  }

  res.send(err.message || 'no can haz weddings here!');
});


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
