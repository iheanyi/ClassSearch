class AddProfessorToSections < ActiveRecord::Migration
  def change
    add_reference :sections, :professor, index: true
  end
end
