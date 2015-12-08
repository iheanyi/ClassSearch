class Api::V1::SectionsController < ApplicationController
  respond_to :json

  def index
    #render json: Section.includes(:professor).all
    #respond_with params[:course_id] ? Course.find(params[:course_id]).sections : Section.all
    # Respond with the following: Section.where(term_id: 1).joins(:course).map(&:course).uniq
    if params[:course_id]
      render json: Course.find(params[:course_id]).sections
    elsif params[:professor_id]
      puts "FINDING PROFESSOR"

      render json: Professor.find(params[:professor_id]).sections
    else
      render json: nil
    end
  end

  def show
    render json: section
  end

  private
    def section
      Section.find(params[:id])
    end

    def section_params
      params.require(:section).permit(:id)
    end
end
