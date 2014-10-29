App.SectionSortable = Ember.Mixin.create({
  sortedSections: function() {
    return this.get('sections').sortBy('sectionNum')
  }.property('sections.@each.sectionNum')
})