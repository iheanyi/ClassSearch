class Api::V1::AttributesController < ApplicationController
  respond_to :json
  def index
    if params[:course_id]
      render json: Course.find(params[:course_id]).cattributes
    else
      render json: Attribute.where("courses_count > 0"), each_serializer: AttributesSerializer
    end

  end

  def show
    render json: solo_attribute
  end

  private
    def solo_attribute
      Attribute.includes(:courses).find(params[:id])
    end

    def attribute_params
      params.require(:attribute).permit(:id, :name, :tag)
    end
end
