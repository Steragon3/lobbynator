class CreateLobbies < ActiveRecord::Migration[6.0]
  def change
    create_table :lobbies do |t|
      t.string :name
      t.string :descripton
      t.references :users, foreign_key = true
      t.timestamps
    end
  end
end
