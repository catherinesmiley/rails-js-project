class CreateSmallWords < ActiveRecord::Migration[6.0]
  def change
    create_table :small_words do |t|
      t.string :name
      t.references :big_word, null: false, foreign_key: true

      t.timestamps
    end
  end
end
