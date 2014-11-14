class TimeslotSerializer < ActiveModel::Serializer
  attributes :id, :days_of_week, :start_time, :end_time

  has_many :sections, embed: :ids
  has_many :courses, through: :sections
end