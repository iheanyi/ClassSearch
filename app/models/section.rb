class Section < ActiveRecord::Base
  belongs_to :course, counter_cache: true
  has_many :section_professors
  has_many :professors, through: :section_professors
end
