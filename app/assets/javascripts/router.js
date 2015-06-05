
App.Router.map(function(){
  // Create lead resource with path set to root
  this.resource('leads', {path: '/'});
});

App.Router.reopen({
  location: 'auto',
  rootURL: '/'
});

