class AddSectionProfessorsCountToProfessors < ActiveRecord::Migration
  def change
    add_column :professors, :section_professors_count, :integer
  end
end
