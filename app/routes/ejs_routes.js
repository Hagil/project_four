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

function do_profile(req, res) {
    console.log('getting profile');
    res.render('profile.ejs');
}

function do_momSignup(req, res) {
    console.log('getting mom signup');
    res.render('auth/mom_signup.ejs');
}

function do_momLogin(req, res) {
    console.log('getting mom login');
    res.render('auth/mom_login.ejs');
}

function do_guestLogin(req, res) {
    console.log('getting guest login');
    res.render('auth/guest_login.ejs');
}

function do_about(req, res) {
    console.log('getting about');
    res.render('misc/about.ejs');
}

function do_survey(req, res) {
    console.log('getting survey');
    res.render('misc/survey.ejs');
}

function do_recipeGod(req, res) {
    console.log('doing recipe_god');
    res.render('recipe_lists/recipe_god.ejs');
}

function do_recipeGuest(req, res) {
    console.log('doing recipe_guest');
    res.render('recipe_lists/recipe_guest.ejs');
}

function do_bulgogi(req, res) {
    console.log('getting bulgogi');
    res.render('recipes/bulgogi.ejs');
}
function do_dakdoritang(req, res) {
    console.log('getting dakdoritang');
    res.render('recipes/dakdoritang.ejs');
}
function do_japchae(req, res) {
    console.log('getting japchae');
    res.render('recipes/japchae.ejs');
}
function do_kimbap(req, res) {
    console.log('getting kimbap');
    res.render('recipes/kimbap.ejs');
}
function do_kimchiJjigae(req, res) {
    console.log('getting kimchiJjigae');
    res.render('recipes/kimchi_jjigae.ejs');
}
function do_kimchi(req, res) {
    console.log('getting kimchi');
    res.render('recipes/kimchi.ejs');
}
function do_kkaennip(req, res) {
    console.log('getting kkaennip');
    res.render('recipes/kkaennip.ejs');
}
function do_odeng(req, res) {
    console.log('getting odeng');
    res.render('recipes/odeng.ejs');
}
function do_oeeji(req, res) {
    console.log('getting oeeji');
    res.render('recipes/oeeji.ejs');
}
function do_samgaetang(req, res) {
    console.log('getting samgaetang');
    res.render('recipes/samgaetang.ejs');
}
function do_tteokbokki(req, res) {
   console.log('getting tteokbokki');
    res.render('recipes/tteokbokki.ejs');
}
