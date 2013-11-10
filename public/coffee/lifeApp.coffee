'use strict'

app = angular.module 'lifeApp', []

app.config ['$routeProvider', ($routeProvider) ->
  $routeProvider
    .when '/',
      templateUrl: 'partials/home.html'
      controller: 'HomeCtrl'
    .otherwise
      redirectTo: '/'
      controller: 'HomeCtrl'
]
