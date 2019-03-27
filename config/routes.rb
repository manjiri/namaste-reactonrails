Rails.application.routes.draw do
  resources :users
  root "hello_world#index"
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html



  post 'authenticate', to: 'authentication#authenticate'
end
