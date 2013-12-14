'use strict'

app = angular.module 'lifeApp'

app.directive 'lifeChart', ->
  restrict: 'A'
  template: '<div id="mainLifeChart" style="width:100%; height:100%;"></div>'
  replace: true
  link: (scope, elem, attrs) ->
    scope.$watch attrs.data, (data, old) ->
      if data?
        console.log 'rendering', data
        elem.highcharts(data)
      else
        console.log 'nope'
