(function() {
  'use strict';
  var app;

  app = angular.module('lifeApp', []);

  app.config([
    '$routeProvider', function($routeProvider) {
      return $routeProvider.when('/', {
        templateUrl: 'partials/home.html',
        controller: 'AppMainCtrl'
      }).otherwise({
        redirectTo: '/'
      });
    }
  ]);

}).call(this);
