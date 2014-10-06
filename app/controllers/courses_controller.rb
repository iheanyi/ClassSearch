class CoursesController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json { render json: Department.where(:tag => params[:department_id]).first.courses }
    end
  end
end
