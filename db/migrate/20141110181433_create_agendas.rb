class CreateAgendas < ActiveRecord::Migration
  def change
    create_table :agendas do |t|
      t.json :info
      t.string :slug

      t.timestamps
    end
  end
end
