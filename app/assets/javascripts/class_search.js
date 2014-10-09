var apiURL = '/api/departments.json'
var courseURL = '/api/departments'

Vue.component('test-component', {
  template: 'A custom component for here, yay!',
  data: {
    message: 'Hello'
}

});

var app = new Vue({
  el: '#app',

  filters: {
    timeFormat: function(date) {
      //formatted = moment(date, 'HH:mm A');
      return moment(date).add(1, 'hours').format("h:mmA");
    },
  },

  created: function() {
    self.courses = [];
    self.selected_course = {};
    self.selected_course.title = 'nothing';
    self.selected_course_name = 'Nothing';
    self.selected_course_credits = 3;
    //self.selected_course = null;
    this.fetchDeptData();
  },

  data: {
    courses: [],
    departments: [],
    custom_course: [],
    sections: [],
    selected_course: {
      title: '',
    },
    selected_course_name: 'Nothing',
    selected_course_credits: 3,
    sections: [],
    selected_course_description: 'Right now, this is just placeholder text until I finally write up a parser for extracting the course description for every single course. I promise that I will get to it eventually, just be patient, these things take time and I am a busy college student. :P',
  },

  methods: {
    fetchDeptData: function() {
      var xhr = new XMLHttpRequest(),
      self = this;
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
      $('.dept-active').removeClass('dept-active');
      $(dept.$el).addClass('dept-active');

      console.log(dept.tag);
      app.courses = dept.courses;
      this.fetchCourseData(dept.tag);
      $('.course-container').show();
    },

    fetchCourseData: function(tag) {
      var xhr = new XMLHttpRequest();
      self = this;
      xhr.open('GET', courseURL + '/' + tag + '/courses.json');
      xhr.onload = function() {
        app.current_courses = JSON.parse(xhr.responseText);
        app.courses = app.current_courses;
        console.log(app.custom_courses);
        console.log("Loaded");
        console.log(app.courses);
      }

      xhr.send();
    },

    loadSections: function(course) {
      course.preventDefault;
      console.log(course.$data);
      $('.course-active').removeClass('course-active');
      $(course.$el).addClass('course-active');
      app.selected_course = course.$data;
      app.sections = course.sections;
      $('.section-container').show();
      $('.meter').removeClass('animated').addClass('animated');
      $('.meter').hide().show();
    }
  }
});

$(document).ready(function(){
  $(document).foundation();
});
