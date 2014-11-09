class CourseSerializer < ActiveModel::Serializer
  attributes :id, :title, :course_num, :course_description, :credits, :sections_count

  has_many :sections
  has_many :cattributes, through: :course_attributes, :key => :attribute_ids, :root => :attributes

end
