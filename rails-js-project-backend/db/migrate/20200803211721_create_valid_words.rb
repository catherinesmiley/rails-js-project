class CreateValidWords < ActiveRecord::Migration[6.0]
  def change
    create_table :valid_words do |t|
      t.string :name
      t.references :word, null: false, foreign_key: true

      t.timestamps
    end
  end
end
