class HomeController < ApplicationController
  def index
    @departments = Department.all
  end

  def alternate
  end
end
