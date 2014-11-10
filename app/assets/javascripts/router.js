// For more information see: http://emberjs.com/guides/routing/

App.Router.reopen({
  location: 'auto',
  rootURL: '/'
});

App.Router.map(function() {

  this.resource('agenda', {path: '/agenda'});

  this.resource('about', {path: '/about'}, function() {

  });
  this.resource('departments', { path: '/' }, function() {
    this.resource('courses', {path :'/all/courses'}, function() {
      this.resource('course', { path: '/:courseNum'});
    });

    this.resource('department', { path: '/:tag' }, function() {
      this.resource('department.courses', { path: '/courses' }, function() {
        this.resource('department.course', { path: '/:courseNum' });
      });
    });
  });

  this.resource('professors', { path: '/professors' }, function() {
    this.resource('professor', { path: '/:prof_slug' }, function() {
      this.resource('professor.courses', { path: '/courses' }, function() {
        this.resource('professor.course', { path: '/:courseNum'});
      });
    });
  });

  this.resource('attributes', {path: '/attributes'}, function() {
    this.resource('attribute', { path: '/:tag' }, function() {
      this.resource('attribute.courses', { path: '/courses'}, function() {
        this.resource('attribute.course', { path: '/:courseNum'});
      });
    })
  })


});
