Rails.application.routes.draw do
  resources :courses

  resources :departments

  get 'home/index'

  root 'home#index'
end
