App.LeadEditController = Ember.ObjectController.extend({
  actions: {
    saveChanges: function() {
      // Save a reference to this
      var self = this;
      // save model, which gets back a promise
      // Once promise is resolved(//done saving, then transtion back to lead route)
      this.get('model').save().then(function(){
        self.transitionToRoute('lead');
      });
    },
    cancel: function() {
      // roll back the model, then transtion back to lead route
      this.get('model').rollback();
      this.transitionToRoute('lead');
    }
  }
});
