class DepartmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :tag, :courses_count

  has_many :courses
end
