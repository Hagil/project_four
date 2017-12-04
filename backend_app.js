var express = require('express');
var backend_app = express();
var passport = require('passport');
var routes = require('./app/routes/main_routes')(backend_app, passport);
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var session = require('express-session');
var port = 3500;

backend_app.set('view engine', 'ejs');
backend_app.use(express.static('public'));
backend_app.use(bodyParser.urlencoded({extended: true}));
backend_app.use(bodyParser.json());
backend_app.use(routes);

backend_app.use(cookieParser()); // read cookies (needed for auth)

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
