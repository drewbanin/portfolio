(function() {
  'use strict';
  var app;

  app = angular.module('lifeApp');

  app.controller('AppMainCtrl', [
    '$scope', function($scope) {
      return $scope.name = 'Drew!';
    }
  ]);

}).call(this);
