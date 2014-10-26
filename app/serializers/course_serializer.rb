class CourseSerializer < ActiveModel::Serializer
  attributes :id, :title, :course_num, :course_description, :credits, :sections_count

  has_many :sections
  #has_many :course_attributes
  has_many :cattributes, through: :course_attributes #, embed: :ids, include: true
  #belongs_to :department

end
