class AddCounterCacheToAttributes < ActiveRecord::Migration
  def change
    add_column :attributes, :courses_count, :integer
  end
end
