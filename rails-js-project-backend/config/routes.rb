Rails.application.routes.draw do
  resources :valid_words
  resources :words
  resources :games
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
