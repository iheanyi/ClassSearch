class ProfessorSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :courses_count, :sections_count

  has_many :sections, embed: :ids
  has_many :courses
end
