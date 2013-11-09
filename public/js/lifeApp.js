// Generated by CoffeeScript 1.3.3
(function() {
  'use strict';

  var lifeApp;

  lifeApp = angular.module('lifeApp', ['appControllers']);

  lifeApp.config([
    '$routeProvider', function($routeProvider) {
      return $routeProvider.when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).otherwise({
        redirectTo: '/',
        controller: 'HomeCtrl'
      });
    }
  ]);

}).call(this);