class Api::V1::TimeslotsController < ApplicationController
  respond_to :json

  def index
    render json: Timeslot.all, each_serializer: TimeslotsSerializer
  end

  def show
    render json: timeslot
  end

  private
    def timeslot
      Timeslot.includes(:courses).find(params[:id])
    end
end
