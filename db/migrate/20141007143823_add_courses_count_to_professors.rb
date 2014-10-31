class AddCoursesCountToProfessors < ActiveRecord::Migration
  def change
    add_column :professors, :courses_count, :integer, :null => false, :default => 0
  end
end
