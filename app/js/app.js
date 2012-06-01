'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/symmetrical', {template: 'partials/symmetrical.html', controller: SymmetricalCtrl});
    $routeProvider.otherwise({redirectTo: '/symmetrical'});
  }]);
