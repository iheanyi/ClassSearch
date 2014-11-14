class Timeslot < ActiveRecord::Base

  has_many :sections
  has_many :courses, through: :sections
end
