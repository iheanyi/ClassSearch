class ProfessorsController < ApplicationController

  def index
    @professors = Professor.all

    respond_to do |format|
      format.html
      format.json { render json: @professors.to_json }
    end
  end

  def show
    @professor = Professor.where(:id => params[:id]).includes(courses: [ {sections: :professor}]).first

    respond_to do |format|
      format.json { render json: @professor.to_json(:include => { :courses => { :include  => {:sections => { :include =>  :professor } } } })
      }


    end
  end
end
