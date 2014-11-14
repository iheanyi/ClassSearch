class TimeslotsSerializer < ActiveModel::Serializer
  attributes :id, :days_of_week, :start_time, :end_time


end
