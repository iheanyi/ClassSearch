class CourseSerializer < ActiveModel::Serializer
  attributes :id, :title, :course_num, :course_description, :credits

  belongs_to :department
  has_many :sections

end
