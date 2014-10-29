class AddCourseAttributesCountToCourse < ActiveRecord::Migration
  def change
    add_column :courses, :course_attributes_count, :integer
  end
end
