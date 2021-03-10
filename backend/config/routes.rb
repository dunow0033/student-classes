Rails.application.routes.draw do
  resources :subjects, only: [ :index, :show ]
  resources :students, only: [ :index ]
end
