// To handle data we will be using Ember Data
// We have a lead in Rails, but Ember needs to know about leads model as well.
// Here is the lead model in Ember

// Ember data gives us the DS.Model

App.Lead = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string'),
  status: DS.attr('string', { defaultValue: 'new' }),
  notes: DS.attr('string'),
  fullName: function() {
    return this.get('firstName') + " " + this.get('lastName');
  }.property('firstName','lastName')
});
