class Api::V1::DepartmentsController < ApplicationController
  respond_to :json

  def index
    @departments = Department.includes(:courses).where("courses_count > 0")
    respond_with @departments #, each_serializer: DepartmentsSerializer
  end

  def show
    respond_with department
  end

  private
    def department
      Department.includes(:courses).find(params[:id])
    end

    def department_params
      params.require(:department).permit(:id, :name, :tag)
    end
end
