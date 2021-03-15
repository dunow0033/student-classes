Rails.application.routes.draw do
  resources :students, only: [ :index, :show, :create ]
  resources :subjects, only: [ :index, :show, :create, :destroy ]
end
