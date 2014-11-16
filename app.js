
// BASE SETUP
var express = require('express')
var port = process.env.PORT || 5000
var app = express();

app.use(express.static(__dirname + '/public'))

// app.get('/', function(request, response) {
//   response.send('Hello World!')
// })


// ROUTES
var home = require('./routes/index');

// ASSIGN ROUTES
app.use('/', home);

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

// VIEW ENGINE SET UP
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.listen(port, function(req, res) {
  console.log("Node app is running at localhost:" + app.get('port'))
})

module.exports = app;
