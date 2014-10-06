class Course < ActiveRecord::Base
  belongs_to :department, counter_cache: true
  validates :department, presence: true
end
