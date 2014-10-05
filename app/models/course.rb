class Course < ActiveRecord::Base
  belongs_to :department
  validates :department, presence: true
end
