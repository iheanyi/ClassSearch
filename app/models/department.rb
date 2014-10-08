class Department < ActiveRecord::Base
  has_many :courses, -> { order(course_num: :asc)}
  has_many :sections, through: :courses

  validates :name, presence: true
  validates :tag, presence: true, uniqueness: true
end
