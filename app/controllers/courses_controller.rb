class CoursesController < ApplicationController
  def index
    @courses = Department.where(:tag => params[:department_id]).first.courses.includes(sections: [:professor])
    respond_to do |format|
      format.html
      #format.json { render json: Department.where(:tag => params[:department_id]).first.courses }
      format.json { render json: @courses.to_json(:include => {:sections => { :include => :professor }
        }
        )
      }
    end
  end
end
