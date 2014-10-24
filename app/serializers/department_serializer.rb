class DepartmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :tag

  has_many :courses, embed: :ids
end