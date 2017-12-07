var FE_app = angular.module('my_app',['ngAnimate']);
FE_app.controller('my_slider', do_my_slider);

function do_my_slider($scope) {
    console.log('doing slider stuff');

    $scope.panel_1 = true;
    $scope.panel_2 = false;
    $scope.panel_3 = false;
    $scope.panel_4 = false;
    $scope.panel_5 = false;

    $scope.slide_panel_1 = function () {
        console.log('sliding one out of the way');
        $scope.panel_1 = false;
        $scope.panel_2 = true;
    }
    $scope.slide_panel_2 = function () {
        console.log('sliding two out of the way');
        $scope.panel_2 = false;
        $scope.panel_3 = true;
    }
    $scope.slide_panel_3 = function () {
        console.log('sliding three out of the way');
        $scope.panel_3 = false;
        $scope.panel_4 = true;
    }

    $scope.slide_panel_4 = function () {
        console.log('sliding four out of the way');
        $scope.panel_4 = false;
        $scope.panel_5 = true;
    }
    $scope.slide_panel_5 = function () {
        console.log('showing five');
        $scope.panel_5 = false;
        // $scope.panel_6 = true;
    }
}

