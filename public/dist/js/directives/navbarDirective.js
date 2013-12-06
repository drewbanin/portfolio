(function() {
  'use strict';
  var app;

  app = angular.module('lifeApp');

  app.directive('navbar', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/navbar.html',
      replace: true,
      link: function(scope, elem, attrs) {}
    };
  });

}).call(this);
