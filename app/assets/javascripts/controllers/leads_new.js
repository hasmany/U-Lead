// LeadsNew route sets up this controller with a fields property that are bound to the inputs
// in the template
App.LeadsNewController = Ember.Controlelr.extend({
  actions:  {
    createLead: function() {
      var self = this;
      this.store.createRecord('lead',this.get('fields'));
    }
  }
});
