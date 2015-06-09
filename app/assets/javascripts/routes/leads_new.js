// Set up empty friled property that will be a plain javascript object
// hold atrbiutes for the new lead, until we are ready to create it
App.LeadsNewRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('fields',{});
    controller.set('showError',false);
  }
});
