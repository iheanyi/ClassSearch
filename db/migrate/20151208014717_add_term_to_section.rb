class AddTermToSection < ActiveRecord::Migration
  def change
    add_column :sections, :term_id, :integer
    add_index :sections, :term_id
  end
end
