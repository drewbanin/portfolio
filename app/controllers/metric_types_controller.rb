class MetricTypesController < ApplicationController

  def index
    @metric_types = MetricType.all
    respond_to do |format|
      format.json { render json: @metric_types }
    end
  end

  def show
    @metric_type = MetricType.find(params[:id])
    respond_to do |format|
      format.json { render json: @metric_type }
    end
  end
end
