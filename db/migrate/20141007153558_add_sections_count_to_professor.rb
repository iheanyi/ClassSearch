class AddSectionsCountToProfessor < ActiveRecord::Migration
  def change
    add_column :professors, :sections_count, :integer
  end
end
