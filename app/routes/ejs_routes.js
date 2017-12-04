var router = require('express').Router();

module.exports = router;

router.get('/', do_homepage);
router.get('/profile', do_profile);

router.get('/mom_signup', do_momSignup);
router.get('/mom_login', do_momLogin);
router.get('/guest_login', do_guestLogin);

router.get('/recipe_god', do_recipeGod);
router.get('/recipe_guest', do_recipeGuest);

router.get('/about', do_about);
router.get('/survey', do_survey);

router.get('/bulgogi', do_bulgogi);
router.get('/dakdoritang', do_dakdoritang);
router.get('/japchae', do_japchae);
router.get('/kimbap', do_kimbap);
router.get('/kimchi_jjigae', do_kimchiJjigae);
router.get('/kimchi', do_kimchi);
router.get('/kkaennip', do_kkaennip);
router.get('/odeng', do_odeng);
router.get('/oeeji', do_oeeji);
router.get('/samgaetang', do_samgaetang);
router.get('/tteokbokki', do_tteokbokki);

// module.exports = function (app, passport) {     console.log('doing
// main_routes')     app.get(

function do_homepage(req, res) {
    console.log('getting homepage');
    res.render('index.ejs'); // load the index.ejs file
}

function do_profile(req, res){
    console.log('getting profile');
    res.render('profile.ejs');
}

function do_recipeGod(req, res) {
    console.log('doing recipe_god');
    res.render('recipe_lists/recipe_god.ejs');
}

function do_recipeGuest(req, res) {
    console.log('doing recipe_guest');
    res.render('recipe_lists/recipe_guest.ejs');
}