class AddDatesToSections < ActiveRecord::Migration
  def change
    add_column :sections, :start_date, :date
    add_column :sections, :end_date, :date
  end
end
