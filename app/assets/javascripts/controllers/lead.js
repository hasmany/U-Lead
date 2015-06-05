// Note that this controller is an ObjectController because it wraps a single lead model
App.LeadController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    // Submit button will call saveChanges function
    // save will actually send an ajax request to our Rails API
    saveChanges: function() {
      this.get('model').save();
    },
    delete: function(){
      var self = this;
      this.get('model').destroyRecord().then(function(){
        self.transitionToRoute('leads');
      });
    }
  },
  showUnsavedMessage: function() {
    return this.get('isDirty') && !this.get('isSaving');
  }.property('isDirty','isSaving')
});

