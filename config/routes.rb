Rails.application.routes.draw do
  root 'home#index'

  #resources :courses
  resources :departments do
    resources :courses
  end

  scope "api" do
    resources :departments
  end

  get 'home/index'
  get '/departments/:tag/courses', to: 'departments#courses'

  #get '/departments', to: 'departments#index'

end
