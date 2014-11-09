class Attribute < ActiveRecord::Base
  has_many :course_attributes
  has_many :courses, through: :course_attributes
  has_many :sections, -> { uniq }, :through => :courses

end
