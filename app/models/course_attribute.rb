class CourseAttribute < ActiveRecord::Base
  belongs_to :course, counter_cache: true
  belongs_to :cattribute, foreign_key: "attribute_id", class_name: "Attribute", counter_cache: :courses_count
end
