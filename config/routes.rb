Rails.application.routes.draw do


  root to: 'home#alternate'
  #root 'home#index'


  namespace :api do
    namespace :v1 do

      resources :courses do
        resources :sections, shallow: true
      end


      resources :departments do
        resources :courses
      end


      resources :attributes do
        resources :courses, shallow: true
      end

      resources :professors do
        resources :courses, shallow: true
      end


    end
  end

  scope "api" do
    resources :departments do
      resources :courses
    end

    #resources :courses do
    #  resources :sections
    #end

    resources :professors
    resources :attributes
  end

  get '*path', to: 'home#alternate'

end
