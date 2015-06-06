'use strict';

var pipette = angular.module('pipette', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap'
]);

pipette.controller('MainCtrl', function($scope, $http) {

});

pipette.controller('HeaderCtrl', function($scope, $http, $location, $window) {
    // Simple GET request example :
    $http.get('/account').
        success(function(data, status, headers, config) {
            alert(data);
        }).
        error(function(data, status, headers, config) {
        });
});
