var apiURL = '/api/v1/departments.json'
var courseURL = '/api/v1/departments'
var baseURL = '/api/v1/'

Vue.component('department-component', {
  template: '<span class="dept-text">{{tag}}</span><br><a class="dept-link" href="#" value="{{tag}}">{{name}}</a>'
});

Vue.component('departments', {
  template: '#departments',
})

Vue.component('attributes', {
  template: '#attributes'
});

Vue.component('professors', {
  template: '#professors',
});

//Vue.config('debug', true);
var app = new Vue({
  el: '#app',

  filters: {
    timeFormat: function(date) {
      //formatted = moment(date, 'HH:mm A');
      return moment(date).isValid() ? moment(date).add(1, 'hours').format("h:mmA") : '';

      //return moment(date).add(1, 'hours').format("h:mmA");
    },

    formatFavorites: function(section) {
      return _.contains(app.favorites, section) ? '- Remove from Favorites' : '+ Add to Favorites';
    },

    formatCredits: function(credits) {
      return credits == -1 ? 'V' : credits;
    }
  },

  created: function() {
    self.courses = [];
    self.departments = [];
    self.professors = [];
    self.currentProfessors = [];
    self.currenProfStartIndex = 0;
    self.currentProfEndIndex = 450;
    self.allCourses = [];
    self.favorites = [];
    self.professor = {};
    self.selected_course = {};
    self.selected_course.title = 'nothing';
    self.selected_course_name = 'Nothing';
    self.selected_course_credits = 3;
    //self.selected_course = null;
    this.fetchDeptData();
    this.fetchAllProfessors();
    this.fetchAllCourses();
    this.fetchAllAttributes();

  },

  data: {
    courses: [],
    professors: [],
    departments: [],
    custom_course: [],
    allCourses: [],
    sections: [],
    attributes: [],
    _: _,
    currentProfessors: [],
    favorites: [],
    selected_course: {
      title: '',
    },
    selected_course_name: 'Nothing',
    selected_course_credits: 3,
    sections: [],
    currentView: 'departments',
    selected_course_description: 'Right now, this is just placeholder text until I finally write up a parser for extracting the course description for every single course. I promise that I will get to it eventually, just be patient, these things take time and I am a busy college student. :P',
  },

  methods: {
    setView: function(view) {
      app.currentView = view;

      if(view != 'professors') {
        app.professor = {};
      }
      console.log(app.currentProfessors);
      console.log(typeof(app.currentProfessors));

    },

    fetchDeptData: function() {
      var xhr = new XMLHttpRequest();
      self = this;
      xhr.open('GET', apiURL);
      xhr.onload = function() {
        app.departments = JSON.parse(xhr.responseText);
        app.departments.unshift({
          tag: "ALL",
          name: "All Courses",
          courses: JSON.parse(xhr.responseText)
        });
      }
      xhr.send();
    },
    fetchAllAttributes: function() {
      var xhr = new XMLHttpRequest();
      self = this;
      xhr.open('GET', baseURL + 'attributes.json');
      xhr.onload = function() {
        app.attributes = JSON.parse(xhr.responseText);
      }
      xhr.send();
    },
    fetchAllProfessors: function() {
      var xhr = new XMLHttpRequest();
      self = this;
      xhr.open('GET', baseURL + 'professors.json');
      xhr.onload = function() {
        app.professors = JSON.parse(xhr.responseText);
        app.currentProfessors = app.professors.slice(currenProfStartIndex, currentProfEndIndex);
      }
      xhr.send();
    },

    fetchAllCourses: function() {
      var xhr = new XMLHttpRequest();
      self = this;
      xhr.open('GET', baseURL + 'courses.json');
      xhr.onload = function() {
        app.allCourses = JSON.parse(xhr.responseText);
        //self.loadAllCourses();
        app.departments.unshift({
          tag: "ALL",
          name: "All Courses",
          courses: JSON.parse(xhr.responseText)
        });
      }
      xhr.send();
    },

    loadAllCourses: function(all) {
      $('.dept-active').removeClass('dept-active');
      $('.all-courses').addClass('dept-active');

      app.courses = app.allCourses.slice(currenProfStartIndex, 1000);
      $('.course-container').show();
    },
    loadProfessorCourses: function(prof) {
      prof.preventDefault;
      $('.prof-active').removeClass('prof-active');
      $(prof.$el).addClass('prof-active');

      var xhr = new XMLHttpRequest();
      xhr.open('GET', baseURL + '/professors/' + prof.id + '.json');
      xhr.onload = function() {
        app.professor = JSON.parse(xhr.responseText);
        app.courses = app.professor.courses;
        $('.course-container').show();
      }

      xhr.send();
    },

    addFavoriteSection: function(favorite_section) {
      favorite_section.preventDefault;
      console.log(favorite_section.$data);
      console.log(favorite_section);
      app.favorites.push(favorite_section.$data);
      console.log(_.contains(app.favorites, favorite_section));

    },
    removeFavoriteSection: function(favorite_section) {
      favorite_section.preventDefault;
      console.log("Clicked!");
      app.favorites = _.reject(app.favorites,
      function(section) { return section.crn == favorite_section.$data.crn });
    },

    loadCourses: function(dept) {
      dept.preventDefault;
      //console.log(dept);
      //console.log(dept.courses);
      $('.dept-active').removeClass('dept-active');
      $(dept.$el).addClass('dept-active');

      console.log(dept.tag);

      var xhr = new XMLHttpRequest();
      xhr.open('GET', baseURL + '/departments/' + dept.tag + '/courses.json');
      xhr.onload = function() {
        app.courses = JSON.parse(xhr.responseText);
      }

      xhr.send();
      if(dept.tag == "ALL") {

      } else {
        //this.fetchCourseData(dept.tag);
      }
      $('.course-container').show();
    },

    fetchCourseData: function(tag) {
      var xhr = new XMLHttpRequest();
      self = this;
      xhr.open('GET', baseURL + '/departments/' + tag + '/courses.json');
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
      var xhr = new XMLHttpRequest();
      course.preventDefault;
      console.log(course.$data);
      $('.course-active').removeClass('course-active');
      $(course.$el).addClass('course-active');
      xhr.open('GET', baseURL + '/courses/' + course.id + '.json');
      xhr.onload = function() {
        course = JSON.parse(xhr.responseText);
        app.selected_course = JSON.parse(xhr.responseText);
        app.sections = course.sections;
      }
      //app.selected_course = course.$data;
      //app.sections = course.sections;
      $('.section-container').show();
      $('.meter').removeClass('animated').addClass('animated');
      $('.meter').hide().show();
      xhr.send();
    }
  }
});

$(document).ready(function(){
  $(document).foundation();
});
