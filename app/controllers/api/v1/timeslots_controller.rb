class Api::V1::TimeslotsController < ApplicationController
  respond_to :json

  def index
    render json: Timeslot.all, each_serializer: TimeslotsSerializer
  end

  def show
    render json: timeslot#, include: 'courses,sections'
  end

  private
    def timeslot
      Timeslot.find(params[:id])
    end
end
