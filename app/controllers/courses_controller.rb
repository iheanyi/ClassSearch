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

=begin
  def show
    @course = Course.where(:id => params[:id]).includes(sections: [:professor]).first
    respond_to do |format|
      format.json { render json: @course.to_json(:include => {:sections => { :include => [:professor, :course] }}) }
    end
  end=end


  def fetch_all
    @courses = Course.includes(:sections).all

    respond_to do |format|
      format.html
      format.json { render json: @courses.to_json(:include => :sections)
      }
    end
  end
end
