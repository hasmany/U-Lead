EmberHelloWorld::Application.routes.draw do
  root to: 'home#index'
  # Catch all rails route to handle whatever arbitary routes we create in Ember
  get "*path", to: 'home#index'
end
