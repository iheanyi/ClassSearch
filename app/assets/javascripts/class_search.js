var apiURL = 'http://localhost:3000/api/departments.json'
var app = new Vue({
  el: '#app',

  filters: {

  },
  created: function() {
    self.courses = [];
    this.fetchDeptData();
  },

  data: {
    courses: [],
    departments: []
  },

  methods: {
    fetchDeptData: function() {
      var xhr = new XMLHttpRequest(),
        self = this
      xhr.open('GET', apiURL);
      xhr.onload = function() {
        app.departments = JSON.parse(xhr.responseText);
      }
      xhr.send();
    },

    loadCourses: function(dept) {
      dept.preventDefault;
      //console.log(dept);
      //console.log(dept.courses);
      console.log(dept);
      app.courses = dept.courses;
      $('.course-container').show();
    },

    loadSections: function(course) {
      course.preventDefault;
      console.log(course);
      $('.section-container').show();
    }
  }
});

$(document).ready(function(){
  $(document).foundation();
});
