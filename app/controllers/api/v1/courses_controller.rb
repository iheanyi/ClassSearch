class Api::V1::CoursesController < ApplicationController
  respond_to :json

  def index
    if params[:professor_id]
      render json: Professor.includes(:sections).find(params[:professor_id]).courses.to_json(include: :sections)
    elsif params[:department_id]
      render json: Department.includes(:sections).find(params[:department_id]).courses.to_json(include: :sections)
    elsif params[:attribute_id]
      render json: Attribute.includes(:sections).find(params[:attribute_id]).courses.to_json(include: :sections)
    else
      render json: Course.all, each_serializer: CoursesSerializer
    end
  end

  def show
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
