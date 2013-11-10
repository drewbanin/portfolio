'use strict'

app = angular.module 'lifeApp'

app.directive 'lifeChart', ->
  restrict: 'A'
  template: '<div id="mainLifeChart" style="width:100%; height:100%;"></div>'
  replace: true
  link: (scope, elem, attrs) ->
    scope.$watch attrs.data, (data, old) ->
      if data isnt old
        console.log 'data: ', data
    ###
    elem.highcharts(
      xAxis:
        categories: ['January', 'February', 'March']
      yAxis:
        title:
          text: 'Fruit eaten'
      series: [
        name: 'Jane'
        data: [1, 0, 4]
      ,
        name: 'John'
        data: [5, 7, 3]
      ,
        name: 'John2'
        data: [15, 17, 13]
      ,
        name: 'John3'
        data: [25, 27, 23]
      ]
    )
    ###
