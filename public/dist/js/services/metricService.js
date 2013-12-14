(function() {
  'use strict';
  var app;

  app = angular.module('lifeApp');

  app.factory('metricService', [
    "$http", function($http) {
      return {
        getMetricList: function(callback) {
          return $http({
            method: 'GET',
            url: '/metric/list'
          }).success(function(data, status, headers, config) {
            return callback(data);
          }).error(function(data, status, headers, config) {
            return console.log("meep, error");
          });
        }
      };
    }
  ]);

}).call(this);
