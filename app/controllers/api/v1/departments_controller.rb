class Api::V1::DepartmentsController < ApplicationController
  respond_to :json

  def index
    @departments = Department.includes(:courses).where("courses_count > 0")
    render @departments#, each_serializer: DepartmentsSerializer
  end

  def show
    render department
  end

  private
    def department
      Department.includes(:courses).find(params[:id])
    end

    def department_params
      params.require(:department).permit(:id, :name, :tag)
    end
end
