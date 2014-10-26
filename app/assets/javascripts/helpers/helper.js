Ember.Handlebars.registerBoundHelper('currentDate', function() {
  return moment().format('LL');
});

Ember.Handlebars.registerHelper('formatDate', function(date) {
  console.log(date);
  console.log(moment(date));
  return moment(date.toString()).isValid() ? moment(date).add(1, 'hours').format("h:mmA") : 'TBD'
});