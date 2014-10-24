Rails.application.routes.draw do
  #resources :attributes

  #resources :sections

  #resources :professors

  root to: 'home#alternate'
  #root 'home#index'
  #resources :courses
=begin
  resources :departments do
    resources :courses
  end
=end


  namespace :api do
    namespace :v1 do

      resources :courses do
        resources :sections, shallow: true
      end


      resources :departments do
        resources :courses
      end



      resources :professors do
        resources :courses, shallow: true
      end

      resources :attributes do
        resources :courses, shallow: true
      end

      resources :courses

      #resources :sections


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
