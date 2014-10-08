Rails.application.routes.draw do
  resources :sections

  resources :professors

  root 'home#index'

  #resources :courses
  resources :departments do
    resources :courses
  end

  scope "api" do
    resources :departments do
      resources :courses
    end
    resources :courses
  end

  get 'home/index'
  get '/departments/:tag/courses', to: 'departments#courses'
  get '/courses', to: 'courses#fetch_all'

  #get '/departments', to: 'departments#index'

end
