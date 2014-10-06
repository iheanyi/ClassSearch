class AddCoursesCountToDepartment < ActiveRecord::Migration
  def change
    add_column :departments, :courses_count, :integer
  end
end
