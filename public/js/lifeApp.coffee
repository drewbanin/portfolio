'use strict'

lifeApp = angular.module 'lifeApp', [
  'appControllers'
]

lifeApp.config ['$routeProvider', ($routeProvider) ->
  $routeProvider
    .when '/',
      templateUrl: 'partials/home.html'
      controller: 'HomeCtrl'
    .otherwise
      redirectTo: '/'
      controller: 'HomeCtrl'
]
