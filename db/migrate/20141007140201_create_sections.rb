class CreateSections < ActiveRecord::Migration
  def change
    create_table :sections do |t|
      t.integer :crn
      t.integer :open_seats
      t.integer :max_seats
      t.string :days_of_week
      t.time :start_time
      t.time :end_time
      t.string :location
      t.integer :section_num

      t.timestamps
    end
  end
end
