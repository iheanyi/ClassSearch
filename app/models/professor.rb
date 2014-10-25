class Professor < ActiveRecord::Base
  #include ActiveModel::Serialization
  has_many :section_professors
  has_many :sections
  has_many :courses, -> { uniq }, :through => :sections
end
