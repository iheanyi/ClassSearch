class Api::V1::CoursesController < ApplicationController
  respond_to :json

  def index
    render json: Course.all, each_serializer: CoursesSerializer
  end

  def show
    #@course = Course.includes(:sections).find(params[:id])
    render json: course #, serializer: CoursesSerializer
  end

  private
    def course
      Course.includes(:sections, :cattributes).find(params[:id])
    end

    def course_params
      #params.require(:course).permit(:id, :title, :course_num, :credits, :crosslisted, :course_description, :sections_count, :sections)
    end
end
