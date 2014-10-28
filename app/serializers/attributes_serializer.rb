class AttributesSerializer < ActiveModel::Serializer
  attributes :id, :name, :tag

  has_many :courses
end
