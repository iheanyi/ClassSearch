class Section < ActiveRecord::Base
  belongs_to :course, counter_cache: true

  # Setup Professor Sections Counter
  belongs_to :professor, counter_cache: true

  def after_save
    self.update_counter_cache
  end

  def after_destroy
    self.update_counter_cache
  end

  def update_counter_cache
    self.professor.update_counter_cache
    self.save!
  end
end
