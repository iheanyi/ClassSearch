class SectionSerializer < ActiveModel::Serializer
  attributes :id, :crn, :open_seats, :max_seats, :days_of_week, :start_time, :end_time, :location, :section_num

  belongs_to :course
  embed :id, includes: true
end
