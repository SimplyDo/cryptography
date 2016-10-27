'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/aes', {template: 'partials/aes.html', controller: aesCtrl});
    $routeProvider.when('/about', {template: 'partials/about.html', controller: homeCtrl});
    //$routeProvider.when('/memorize', {template: 'partials/memorize.html', controller: memorizeCtrl});
    $routeProvider.when('/phrases', {template: 'partials/phrases.html', controller: phrasesCtrl});
    //$routeProvider.when('/about', {template: 'partials/about.html', controller: aboutCtrl});
    $routeProvider.otherwise({redirectTo: '/aes'});
  }]);
