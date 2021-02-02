class CreateChatmessages < ActiveRecord::Migration[6.0]
  def change
    create_table :chatmessages do |t|
      t.string :text
      t.references :users
      t.references :lobbies 
      t.timestamps
    end
  end
end
