class ProfessorsSerializer < ActiveModel::Serializer
  include ActiveModel::Serialization
  attributes :id, :first_name, :last_name, :sections_count, :courses_count
end
