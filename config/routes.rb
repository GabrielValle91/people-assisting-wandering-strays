Rails.application.routes.draw do
  scope '/api' do
    resources :found_pet_comments
    resources :found_pets
    resources :lost_pet_comments
    resources :lost_pets
  end
  devise_for :users, controllers: { registrations: 'registrations', sessions: 'sessions' }
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do 
    !request.xhr? && request.format.html? 
  end
end
