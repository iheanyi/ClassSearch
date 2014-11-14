class SectionSerializer < ActiveModel::Serializer
  attributes :id, :crn, :open_seats, :max_seats, :days_of_week, :start_time, :end_time, :location, :section_num, :course_id

  has_one :professor#, embed_in_root: true
  has_one :course, embed_in_root: true
  has_one :timeslot
end
