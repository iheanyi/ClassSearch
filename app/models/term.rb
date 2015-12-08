class Term < ActiveRecord::Base
  has_many :sections
  has_many :courses, through: :sections

  validates :name, presence: true
  validates :tag, presence: true, uniqueness: true
end
