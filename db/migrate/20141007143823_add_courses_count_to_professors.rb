class AddCoursesCountToProfessors < ActiveRecord::Migration
  def change
    add_column :professors, :courses_count, :integer
  end
end
