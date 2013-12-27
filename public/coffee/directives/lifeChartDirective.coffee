'use strict'

app = angular.module 'lifeApp'

app.directive 'lifeChart', ->
  restrict: 'A'
  template: '<div id="life-chart-container"></div>'
  link: (scope, elem, attrs) ->
    scope.$watch attrs.data, (data, old) ->
      console.log "Data?"
      if data?
        if not data.chart?
          data.chart = {}
        data.chart.renderTo = 'life-chart-container'
        console.log data
        console.log JSON.stringify data
        chart = new Highcharts.Chart data
        # holy shit holy shit holy shit, this is so terrible
        # please fix this before any prospective employers see it
        # (Necessary to force highcharts to expand to full-with)
        setTimeout ->
          $(window).resize() # TODO : use window from DI
        , 0
