class CourseSerializer < ActiveModel::Serializer
  attributes :id, :title, :course_num, :course_description, :credits

  has_many :sections, embed: :ids
  #belongs_to :department

end