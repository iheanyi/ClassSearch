class AddTimeslotToSection < ActiveRecord::Migration
  def change
    add_reference :sections, :timeslot, index: true
  end
end
