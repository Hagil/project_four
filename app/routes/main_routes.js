var router = require('express').Router();
var RECIPECLASS = require('../../mongodb/mongoose_connection');
module.exports = router;

router.get('/', do_homepage);

function do_homepage(req, res){
    console.log('doing homepage');
    res.render('index');
}
