class CreateTimeslots < ActiveRecord::Migration
  def change
    create_table :timeslots do |t|
      t.time :start_time
      t.time :end_time
      t.string :days_of_week

      t.timestamps
    end
  end
end
