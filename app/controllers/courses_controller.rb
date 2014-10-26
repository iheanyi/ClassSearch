class CoursesController < ApplicationController
  def index
    @dept = Department.where(:tag => params[:department_id]).first
    @courses = @dept ? @dept.courses.includes(sections: [:professor]) : Course.order("course_num ASC").all


    respond_to do |format|
      format.html
      format.json { render json: @dept ? @courses.to_json(:include => {:sections => { :include => :professor }}) : @courses.to_json
      }
    end
  end
end