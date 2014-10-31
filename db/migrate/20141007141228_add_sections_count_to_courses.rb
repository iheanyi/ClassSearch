class AddSectionsCountToCourses < ActiveRecord::Migration
  def change
    add_column :courses, :sections_count, :integer, :null => false, :default => 0
  end
end
