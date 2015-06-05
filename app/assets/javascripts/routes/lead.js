// Access each lead through a dynamic url, by getting the params id
App.LeadRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('lead',params.id);
  }
});
