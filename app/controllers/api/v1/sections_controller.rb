class Api::V1::SectionsController < ApplicationController
  respond_to :json
  def index
    #respond_with params[:course_id] ? Course.find(params[:course_id]).sections : Section.all
  end

  def show
    respond_with section
  end

  def course_sections

  end
  private
    def section
      Section.includes(:professor).find(params[:id])
    end

    def section_params
      params.require(:section).permit(:id)
    end
end
