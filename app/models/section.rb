class Section < ActiveRecord::Base
  belongs_to :course, counter_cache: true
  has_many :section_professors
  belongs_to :professor, counter_cache: :courses_count
end
