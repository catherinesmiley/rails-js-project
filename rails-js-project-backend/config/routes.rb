Rails.application.routes.draw do
  resources :words
  resources :games
  resources :users
  resources :small_words
  resources :big_words
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
