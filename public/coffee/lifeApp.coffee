'use strict'

app = angular.module 'lifeApp', []

app.config ['$routeProvider', ($routeProvider) ->
  $routeProvider
    .when '/',
      templateUrl: 'partials/home.html'
      controller: 'AppMainCtrl'
    .otherwise
      redirectTo: '/'
]
