create our angular app and inject ngAnimate and ui-router 
=============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes 
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'misc/form.ejs',
            controller: 'formController'
        })

        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('form.profile', {
            url: '/profile',
            templateUrl: 'misc/form-profile.ejs'
        })

        // url will be /form/interests
        .state('form.favourites', {
            url: '/favourites',
            templateUrl: 'misc/form-favourites.ejs'
        })

        // url will be /form/payment
        .state('form.thanks', {
            url: '/thanks',
            templateUrl: 'misc/form-thanks.ejs'
        });

    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/form/profile');
})

// our controller for the form
// =============================================================================
.controller('formController', function($scope) {

    // we will store all of our form data in this object
    $scope.formData = {};

    // function to process the form
    $scope.processForm = function() {
        alert('You are awesome!');
    };

});
