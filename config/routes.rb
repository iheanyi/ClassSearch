Rails.application.routes.draw do


  devise_for :users, controllers: {sessions: 'sessions'}
  root to: 'home#alternate'
  #root 'home#index'


  namespace :api do
    namespace :v1 do

      resources :courses, shallow: true do
        resources :attributes
        resources :sections
      end


      resources :departments do
        resources :courses, shallow: true
      end


      resources :attributes, shallow: true do
        resources :courses, shallow: true
      end

      resources :professors do
        resources :courses, shallow: true
        resources :sections, shallow: true
      end


    end
  end

  get '*path', to: 'home#alternate'

end
