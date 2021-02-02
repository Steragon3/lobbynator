Rails.application.routes.draw do
  resources :cats
  resources :lobbies
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'lobby#index'
end
