class Course < ActiveRecord::Base
  belongs_to :department, counter_cache: true
  has_many :sections
  has_many :professors, through: :sections
  validates :department, presence: true
end
