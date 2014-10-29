class Api::V1::AttributesController < ApplicationController
  respond_to :json
  def index
    #render json: (params[:course_id] ? Course.find(params[:course_id]).attributes : Attribute.all), each_serializer: AttributesSerializer
    render json: Attribute.where("courses_count > 0"), each_serializer: AttributesSerializer
  end

  def show
    render json: solo_attribute
  end

  def course_attributes
    render json: Attribute.limit(10), each_serializer: AttribetusSerializer
  end

  private
    def solo_attribute
      Attribute.includes(:courses).find(params[:id])
    end

    def attribute_params
      params.require(:attribute).permit(:id, :name, :tag)
    end
end
