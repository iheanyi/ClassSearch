class AddCourseAttributesCountToAttribute < ActiveRecord::Migration
  def change
    add_column :attributes, :course_attributes_count, :integer
  end
end
