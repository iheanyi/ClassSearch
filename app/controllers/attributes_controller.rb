class AttributesController < ApplicationController
  def index
    @attributes = Attribute.all
    respond_to do |format|

      format.json { render json: @attributes.to_json }
    end
  end
end
