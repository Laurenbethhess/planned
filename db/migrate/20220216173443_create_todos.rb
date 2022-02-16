class CreateTodos < ActiveRecord::Migration[7.0]
  def change
    create_table :todos do |t|
      t.string :todo
      t.references :category, null: false, foreign_key: true
      t.integer :importance

      t.timestamps
    end
  end
end
