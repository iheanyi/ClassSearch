class Professor < ActiveRecord::Base
  #include ActiveModel::Serialization
  has_many :section_professors
  has_many :sections
  has_many :courses, -> { uniq }, :through => :sections

  def after_save
    update_counter_cache
  end

  def after_destroy
    update_counter_cache
  end

  def update_counter_cache
    #self.courses_count = self.courses.count
    Professor.update_counters(self.id, :courses_count => self.courses.count)
    self.save!
  end
  #counter_culture [:course]
  #counter_culture [:section]
end
