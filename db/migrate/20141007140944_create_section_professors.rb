class CreateSectionProfessors < ActiveRecord::Migration
  def change
    create_table :section_professors do |t|
      t.references :section, index: true
      t.references :professor, index: true

      t.timestamps
    end
  end
end
