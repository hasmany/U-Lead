
App.Router.map(function(){
  // Create leads resource with path set to root
  this.resource('leads', {path: '/'}, function(){
    this.route('new');
    // We ant list of leads to still remain present on the page when we show a lead
    // This resource should be nested under the leads resource
    this.resource('lead',{path: '/leads/:id'}, function(){
      this.route('edit');
    });
  });
});

App.Router.reopen({
  location: 'auto',
  rootURL: '/'
});

