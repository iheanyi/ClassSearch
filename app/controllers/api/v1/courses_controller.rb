class Api::V1::CoursesController < ApplicationController
  respond_to :json

  def index
    respond_with Course.includes(:sections).all
  end

  def show
    @course = Course.includes(:sections).find(params[:id])
    respond_with course
  end

  private
    def course
      Course.includes(:sections).find(params[:id])
    end

    def course_params
      #params.require(:course).permit(:id, :title, :course_num, :credits, :crosslisted, :course_description, :sections_count, :sections)
    end
end
