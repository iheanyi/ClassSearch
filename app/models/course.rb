class Course < ActiveRecord::Base
  belongs_to :department, counter_cache: true
  has_many :sections
  has_many :professors, -> { uniq }, through: :sections

  validates :department, presence: true
end
