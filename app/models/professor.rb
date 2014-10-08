class Professor < ActiveRecord::Base
  has_many :section_professors
  has_many :sections #, through: :section_professors
  has_many :courses, through: :sections
end
