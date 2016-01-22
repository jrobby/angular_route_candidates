/**
 * Created by robbynewman on 1/21/16.
 */
var app = angular.module('routeApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/trump', {
            templateUrl: 'views/trump.html',
            controller: 'TrumpController'
        })
        .when('/clinton', {
            templateUrl: 'views/clinton.html',
            controller: 'ClintonController'
        })
        .when('/sanders', {
            templateUrl: 'views/sanders.html',
            controller: 'SandersController'
        });
}]);

app.controller('TrumpController', ['$scope', function($scope){

}]);

app.controller('ClintonController', ['$scope', function($scope){

}]);

app.controller('SandersController', ['$scope', function($scope){

}]);

