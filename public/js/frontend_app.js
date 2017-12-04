console.log('loaded frontend_app');
var frontend_app = angular.module('recipes', []);
frontend_app.controller('data', do_data);


function do_data($scope, $http) {
    console.log('inside dodata');
    $scope.message = "Welcome to Soojee's Recipes";
    $scope.read = function () {
        console.log('reading data from backend');
        $http.get('/api/v10/read').then(function (recipes) {
            $scope.recipes = recipes.data;
            console.log($scope.recipes);
        });
    }
    $scope.read();

    $scope.create = function () {
        console.log('creating recipe');
        var data = {
            number: $scope.input_number,
            korean_name: $scope.input_korean_name,
            english_name: $scope.input_english_name,
            description: $scope.input_description,
            ingredients: $scope.input_ingredients,
            preparation_time: $scope.input_prepartion_time,
            cooking_time: $scope.input_cooking_time,
            instructions: $scope.input_instructions
        }
        $http.post('/api/v10/create', data)
            .then(function (result) {
                console.log(result);
                $scope.message = result.data.message;
                $scope.read();
            });
    }

    $scope.update = function (recipe) {
        console.log('updating recipe');
  
        $http.put('/api/v10/update', recipe).then(function (result) {
            console.log(result);
            $scope.message = result.data.message;
            $scope.read();
        });
    }
    $scope.delete = function (recipe) {
        console.log('deleting recipe');
        $http.delete('/api/v10/delete/' + recipe._id).then(function (result) {
            console.log(result);
            $scope.message = result.data.message;
            $scope.read();
        });
    }
    $scope.dropdown = function () {
        console.log('getting recipes');
        $http.get('/api/v10/recipedropdown').then(function (party) {
            console.log(recipe);
            $scope.recipe = recipe.data;
        });
    }
    $scope.dropdown();

}