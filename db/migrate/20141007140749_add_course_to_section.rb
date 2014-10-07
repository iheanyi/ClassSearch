class AddCourseToSection < ActiveRecord::Migration
  def change
    add_reference :sections, :course, index: true
  end
end
