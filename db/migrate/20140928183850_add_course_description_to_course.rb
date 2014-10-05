class AddCourseDescriptionToCourse < ActiveRecord::Migration
  def change
    add_column :courses, :course_description, :text
  end
end
