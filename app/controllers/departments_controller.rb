class DepartmentsController < ApplicationController

  def index
    @departments = Department.order("name ASC").includes(:courses).all

    respond_to do |format|
      format.html
      format.json { render json: @departments.to_json(:include => :courses) }
    end
  end

  def show
    respond_to do |format|

      format.json { render json: Department.find(params[:tag]) }
    end
  end
end