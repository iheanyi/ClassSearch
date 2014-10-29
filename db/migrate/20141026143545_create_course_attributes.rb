class CreateCourseAttributes < ActiveRecord::Migration
  def change
    create_table :course_attributes do |t|
      t.references :course, index: true
      t.references :attribute, index: true

      t.timestamps
    end
  end
end
