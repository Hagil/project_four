function local_routes(app, passport) {
    console.log('export local_routes');
    // LOGIN =============================== show the login form

    app.get('/mom_login', function (req, res) {
        console.log('logging_in');
        // render the page and pass in any flash data if it exists
        res.render('mom_login.ejs', {
            message: req.flash('loginMessage')
        });
    });

    // process the login form
    // app.post('/login', passport.authenticate('local-login', {
    //     successRedirect: '/profile', // redirect to the secure profile section
    //     failureRedirect: '/mom_login', // redirect back to the login page if there is an error
    //     failureFlash: true // allow flash messages
    // }));
app.post('/mom_login', function(req, res){
    res.redirect ('/profile');
})
    // SIGNUP ============================== show the signup form
    app.get('/signup', function (req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', {
            message: req.flash('signupMessage')
        });
    });

    // process the signup form
    // app.post('/signup', passport.authenticate('mom_signup', {
    //     successRedirect: '/recipe_god',
    //     failureRedirect: '/mom_signup',
    //     failureFlash: true
    // }));
    app.post ('/signup', function (req, res){
        res.redirect ('/mom_signup')
    })

}
module.exports = local_routes;