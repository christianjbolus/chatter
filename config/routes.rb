Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :chats do
    resources :replies
  end

  resources :users, only: :create
  get '/users/:username', to: 'users#show'
  put '/users/:username', to: 'users#update'
  get '/users/:username/chats', to: 'users#user_chats'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
