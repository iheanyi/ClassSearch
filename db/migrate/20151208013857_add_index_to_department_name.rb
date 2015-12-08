class AddIndexToDepartmentName < ActiveRecord::Migration
  def change
    add_index :departments, :tag
  end
end
