class SectionsController < ApplicationController
  def index
    @sections = Courses.where(:course_id => params[:course_id]).first.sections.order("section_num ASC")
    respond_to do |format|
      format.html
      format.json { render json: @sections.to_json(:include => :professor)}
    end
  end
end
