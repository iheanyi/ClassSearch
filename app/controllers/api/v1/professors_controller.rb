class Api::V1::ProfessorsController < ApplicationController
  def index
    render json: Professor.includes(:courses).limit(50)
  end

  def show
    render json: professor
  end

  private
    def professor
      return Professor.includes(:sections, :courses).find(params[:id])
    end
end
