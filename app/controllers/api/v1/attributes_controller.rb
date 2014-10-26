class Api::V1::AttributesController < ApplicationController
  respond_to :json
  def index
    render json: Attribute.includes(:courses).limit(80)
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
