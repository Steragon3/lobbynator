Rails.application.routes.draw do
  devise_for :users
  resources :cats
  resources :lobby
  #resources :users, :path => "profile" ,only: [:show, :edit, :update]
  get 'users/:id' => 'users#show'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'lobby#index'
end
