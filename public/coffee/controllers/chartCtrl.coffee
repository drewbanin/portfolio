'use strict'

app = angular.module 'lifeApp'

app.controller 'ChartCtrl', ['$scope', ($scope) ->
  $scope.lifeData =
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
]

