// You can sort array of modles by specifiying sortProperties
// sortProperties takes an array of strings, that are sorted with highest priority first
App.LeadsController = Ember.ArrayController.extend({
  sortProperties: ['firstName','lastName']
});

