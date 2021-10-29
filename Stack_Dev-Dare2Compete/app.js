var createError = require('http-errors');
var express = require('express');

var path = require('path');
var indexRouter = require('./routes/index');
var mongodb = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var dbUrl = "mongodb://admin:admin@cluster0-shard-00-00-uhtmy.mongodb.net:27017,cluster0-shard-00-01-uhtmy.mongodb.net:27017,cluster0-shard-00-02-uhtmy.mongodb.net:27017/TicketBook?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
app.use(cors());



app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongodb.connect(dbUrl, { useNewUrlParser: true });
app.use(express.static(path.join(__dirname, 'public')));
app.use('/seats', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', '*');
    next();
});


app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);

});


module.exports = app;