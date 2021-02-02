class CreateLobbies < ActiveRecord::Migration[6.0]
  def change
    create_table :lobbies do |t|
      t.string :name
      t.string :description
      t.references :user, foreign_key: true
      t.datetime :date, null: false
      t.timestamps
    end
  end
end
