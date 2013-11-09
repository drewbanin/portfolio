'use strict'

appControllers = angular.module 'appControllers', []

appControllers.controller 'HomeCtrl', ['$scope', ($scope) ->
  $scope.name = 'Drew!'
]

