class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string :title
      t.string :course_num
      t.references :department, index: true
      t.integer :credits
      t.boolean :crosslisted

      t.timestamps
    end
  end
end
