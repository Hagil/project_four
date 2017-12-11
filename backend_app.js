var express = require('express');
var mongoose = require('./mongodb/mongoose_connection')
var backend_app = express();
var passport = require('passport');
var routes = require('./app/routes/main_routes')(backend_app, passport);

var ejs_routes = require('./app/routes/ejs_routes');
var api_routes = require('./app/routes/api_routes');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var session = require('express-session');
var port = 3500;

backend_app.set('view engine', 'ejs');
backend_app.use(express.static('public'));
backend_app.use(cookieParser()); // read cookies (needed for auth)
backend_app.use(bodyParser.urlencoded({extended: true}));
backend_app.use(bodyParser.json());
backend_app.use(ejs_routes);
backend_app.use(api_routes);

// required for passport
backend_app.use(session({
    secret: 'ballislife'
})); // session secret
 backend_app.use(passport.initialize());
 backend_app.use(passport.session()); // persistent login sessions
 backend_app.use(flash()); // use connect-flash for flash messages stored in session

backend_app.listen(port, listening);
function listening(){
    console.log('broadcasting on localhost:' + port);
}
