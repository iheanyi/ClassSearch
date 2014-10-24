// For more information see: http://emberjs.com/guides/routing/

App.Router.reopen({
  location: 'auto',
  rootURL: '/'
});

App.Router.map(function() {
  this.resource('departments', { path: '/' }, function() {
    this.resource('department', { path: '/:tag/courses' }, function() {
      this.resource('course', { path: '/:courseNum' }, function() {
        this.resource('sections', {path: '/sections' });
      });

/*      this.resource('department', { path: '/dept/:id' });
*/      //this.resource('department')
    });
  })
});
