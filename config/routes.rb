Rails.application.routes.draw do
  devise_for :users
  # For details o the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'top#index'
  resources :list, only: %i(new create)
  resources :list, only: %i(new create edit update destroy) do
    resources :card, except: %i(index)
end
