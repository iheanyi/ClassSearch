class Api::V1::SessionsController < ApplicationController
  def create
    self.resource = warden.authenticate!(auth_options)
    sign_in(resource_name, resource)
    data = {
      user_token: self.resource.authentication_token,
      user_email: self.resource.email
    }

    render json: data, status: 201
  end
end
