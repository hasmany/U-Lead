// store.js.coffee
//App.ApplicationStore = DS.Store.extend()
//App.ApplicationAdapter = DS.ActiveModelAdapter.extend()

// Tells Ember to prepend all API request with api/v1/, to version the Rails API
DS.RestAdapter.reopen({
  namespace: 'api/v1'
});

App.Store = DS.Store.extend({});
// Active Model Adapter enables Ember to communicate with your Rails backend through Active Model Serializers
App.ApplicationAdapter = DS.ActiveModelAdapter.extend({});





