// For more information see: http://emberjs.com/guides/routing/

App.Router.reopen({
  location: 'auto',
  rootURL: '/'
});

App.Router.map(function() {

  this.resource('departments', { path: '/' }, function() {
    this.resource('courses', {path :'/all/courses'}, function() {
      this.resource('course', { path: '/:courseNum'});
    });

    this.resource('department', { path: '/:tag/courses' }, function() {
      this.resource('department_course', { path: '/:courseNum' }, function() {
        this.resource('sections', {path: '/sections' });
      });
    });
  });

  this.resource('professors', { path: '/professors' }, function() {
    this.resource('professor', { path: '/:lastName/courses' }, function() {
      this.resource('professor_course', { path: '/:courseNum' }, function() {
        //this.resource('sections', {path: '/sections' });
      });
    });
  });


});
