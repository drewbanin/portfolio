'use strict'

app = angular.module 'lifeApp'

app.directive 'navbar', ->
  restrict: 'E'
  templateUrl: 'partials/navbar.html'
  replace: true
  link: (scope, elem, attrs) ->
    return
