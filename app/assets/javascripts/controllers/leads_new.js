// LeadsNew route sets up this controller with a fields property that are bound to the inputs
// in the template
App.LeadsNewController = Ember.Controller.extend({
  actions:  {
    createLead: function() {
      var self = this;
      var fields = this.get('fields');
      // Create a lead with field parameters if fields is valid
      if (App.Lead.valid(fields)) {
        var lead = this.store.createRecord('lead',this.get('fields'));
        // Save lead then transition to that lead's show template
        lead.save().then(function(){
          self.transitionToRoute('lead',lead);
        });
      } else {
      // if not valid set property showError to true
      // we can use showError to display a UI indicating the error
        this.set('showError',true);
      }
    }
  },
});
