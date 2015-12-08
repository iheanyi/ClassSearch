class Section < ActiveRecord::Base
  self.skip_time_zone_conversion_for_attributes = [:start_time, :end_time]
  #around_filter :set_tz
  belongs_to :course, counter_cache: true

  # Setup Professor Sections Counter
  belongs_to :professor, counter_cache: true
  belongs_to :timeslot
  belongs_to :term

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

  private
    def set_tz(&block)
      Time.use_zone('Eastern Standard Time (US & Canada)', &block)
    end
end
