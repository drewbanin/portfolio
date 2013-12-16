/*
#   A model of a plottable series
#
# - x values
# - y values
# - render
#
*/


(function() {
  var SeriesModel;

  SeriesModel = (function() {
    function SeriesModel() {}

    SeriesModel.prototype.xVals = [];

    SeriesModel.prototype.yVals = [];

    SeriesModel.prototype.setXVals = function(xVals) {
      return this.xVals = xVals;
    };

    SeriesModel.prototype.setYVals = function(yVals) {
      return this.yVals;
    };

    SeriesModel.prototype.getXVals = function() {
      return this.xVals;
    };

    SeriesModel.prototype.getYVals = function() {
      return this.yVals;
    };

    return SeriesModel;

  })();

}).call(this);
