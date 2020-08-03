class DropForeignKey < ActiveRecord::Migration[6.0]
  def change
    remove_foreign_key :small_words, column: :big_word_id
  end
end
