class DropSmallWords < ActiveRecord::Migration[6.0]
  def change
    drop_table :small_words
  end
end
