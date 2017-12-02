var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27500/soojee', {useMongoClient: true});

var recipe_structure = {
    number: Number,
    korean_name: String,
    english_name: String,
    description: String,
    ingredients: String,
    preparation_time: Number,
    cooking_time: Number,
    instructions: String
}

var recipe_schema = new mongoose.Schema(recipe_structure, {_id : false});

var RECIPECLASS = mongoose.model('recipe', recipe_structure);

module.exports = RECIPECLASS;