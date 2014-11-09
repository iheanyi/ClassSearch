// For more information see: http://emberjs.com/guides/routing/

App.AgendaRoute = Ember.Route.extend({
  model: function() {
      return this.store.find('section', 74).then(function(response) {
        console.log("Fetched");
        console.log(response);
        section = response;
        course = section.get('course');
        professor = section.get('professor');

        sectionEvents = [];
        console.log(section);
        console.log(section.get('professor'));
        console.log(section.get('course'));

        return {
          events: Ember.A(section.get('eventFormat'))
        }

        console.log("Do we reach this?");
/*        return { events: Ember.A([
          {
            title: "course.get("title")", start: moment(section.get('startTime')).add(2, 'days'), end: moment(section.get('endTime')).add(2, 'days'), description: course.get('description')}
          ])};*/
      });

    }
});
