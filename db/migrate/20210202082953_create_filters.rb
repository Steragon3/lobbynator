class CreateFilters < ActiveRecord::Migration[6.0]
  def change
    create_table :filters do |t|
      t.string :name
      t.references :filter_category, foreign_key = true
      t.timestamps
    end
  end
end
