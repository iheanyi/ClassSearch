class Course < ActiveRecord::Base
  belongs_to :department, counter_cache: true
  has_many :sections
  #has_many :professors, -> { uniq }, through: :sections
  has_many :course_attributes
  has_many :cattributes, through: :course_attributes, class_name: "Attribute"

  validates :department, presence: true
end
