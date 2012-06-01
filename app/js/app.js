'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/encrypt', {template: 'partials/encrypt.html', controller: encryptCtrl});
    $routeProvider.when('/decrypt', {template: 'partials/decrypt.html', controller: decryptCtrl});
    $routeProvider.when('/phrases', {template: 'partials/phrases.html', controller: phrasesCtrl});
    $routeProvider.when('/about', {template: 'partials/about.html', controller: aboutCtrl});
    $routeProvider.otherwise({redirectTo: '/encrypt'});
  }]);
