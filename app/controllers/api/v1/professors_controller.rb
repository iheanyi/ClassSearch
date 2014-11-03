class Api::V1::ProfessorsController < ApplicationController
  def index
    render json: Professor.all, each_serializer: ProfessorsSerializer
  end

  def show
    render json: professor
  end

  private
    def professor
      return Professor.includes(:courses).find(params[:id])
    end
end
