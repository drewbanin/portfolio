
###
#   A model of a plottable series
#
# - x values
# - y values
# - render
#
###

class SeriesModel
  xVals : []
  yVals : []

  setXVals : (xVals) ->
    @xVals = xVals

  setYVals : (yVals) ->
    @yVals

  getXVals : () ->
    @xVals

  getYVals : () ->
    @yVals
