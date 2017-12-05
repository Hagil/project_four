var router = require('express').Router();
var RECIPECLASS = require('../../mongodb/mongoose_connection');
module.exports = router;

//api
router.get('/api/v10/read', do_read);
router.get('/api/v10/read/:_id', do_single_read);
router.post('/api/v10/create', do_create);
router.put('/api/v10/update', do_update);
router.delete('/api/v10/delete/:_id', do_delete);

function do_read(req, res) {
    console.log('getting all recipes');
    RECIPECLASS.find({}, {
            number: 1,
            korean_name: 1,
            english_name: 1,
            description: 1,
            ingredients: 1,
            preparation_time: 1,
            cooking_time: 1,
            instructions: 1
        })
        .then(function (results) {
            // console.log(results);
            res.json(results);
        });
}

function do_single_read(req, res) {
    console.log('getting single recipe');
    console.log(req.params);
    RECIPECLASS
        .findById(req.params._id)
        .then(function (result) {
            console.log(result);
            res.json(result);
        });
}

function do_create(req, res) {
    console.log('creating recipe');
    console.log(req.body);

    var data = {
        number: req.body.number,
        korean_name: req.body.korean_name,
        english_name: req.body.english_name,
        description: req.body.description,
        ingredients: req.body.ingredients,
        preparation_time: req.body.preparation_time,
        cooking_time: req.body.cooking_time,
        instructions: req.body.instructions
    }

    var recipe = new RECIPECLASS(data);
    recipe
        .save()
        .then(function (result) {
            console.log(result);
            res.json({message: 'backend created!'});
        });
}

function do_update(req, res) {
    console.log('updating recipe');
    console.log(req.body);
    var update = {
        $set: req.body
    }
    RECIPECLASS
        .findByIdAndUpdate(req.body._id, update)
        .then(function (result) {
            console.log(result);
            res.json({message: 'backend updated!'});
        });
}

function do_delete(req, res) {
    console.log('deleting recipe');
    console.log(req.params);
    RECIPECLASS
        .findByIdAndRemove(req.params._id)
        .then(function (result) {
            console.log(result);
            res.json({message: 'backend deleted!'});
        });
}
