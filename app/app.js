'use strict';

// Declare app level module which depends on views, and components
var app=angular.module('myApp', [
  'ngRoute',
  'ngMaterial'
]);

//Done required module wise configuration
app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/searchContacts'});
  $routeProvider.when('/searchContacts', {
    templateUrl: 'components/searchContacts/searchContacts.html',
    controller: 'SearchContactsCtrl'
  });
}]);
