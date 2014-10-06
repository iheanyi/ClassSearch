class Department < ActiveRecord::Base
  has_many :courses, -> { order(course_num: :asc)}

  validates :name, presence: true
  validates :tag, presence: true, uniqueness: true
end
