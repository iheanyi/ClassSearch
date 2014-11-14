class Timeslot < ActiveRecord::Base

  has_many :sections
  has_many :courses,  -> { uniq }, through: :sections
end
