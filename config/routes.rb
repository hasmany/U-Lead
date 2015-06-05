EmberHelloWorld::Application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :leads
    end
  end


  root to: 'home#index'
  # Catch all rails route to handle whatever arbitary routes we create in Ember
  get "*path", to: 'home#index'
end
