class CreateTerms < ActiveRecord::Migration
  def change
    create_table :terms do |t|
      t.string :tag
      t.string :name

      t.timestamps
    end
  end
end
