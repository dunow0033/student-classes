Rails.application.routes.draw do
  resources :subjects, only: [ :index, :show ]
end
