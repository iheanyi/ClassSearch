class SectionsController < ApplicationController
  def index
    @sections = Course.where(:id => params[:course_id]).includes(:professor, :course).first.sections.order("section_num ASC")

    respond_to do |format|
      format.html
      format.json { render json: @sections.to_json(:include => :professor, :include => :course)}
    end
  end
end
