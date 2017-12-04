var router = require('express').Router();

module.exports = router;

router.get('/', do_homepage);
router.get('/recipe_god', do_recipegod);






// module.exports = function (app, passport) {
//     console.log('doing main_routes')
//     app.get(

    function do_homepage (req, res) {
        console.log('getting homepage');
        res.render('index.ejs'); // load the index.ejs file
    }

    function do_recipegod( req,res){
        console.log('doing recipe_god');
        res.render(recipe_lists/recipe_god)
    }