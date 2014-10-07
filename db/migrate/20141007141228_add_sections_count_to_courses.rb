class AddSectionsCountToCourses < ActiveRecord::Migration
  def change
    add_column :courses, :sections_count, :integer
  end
end
