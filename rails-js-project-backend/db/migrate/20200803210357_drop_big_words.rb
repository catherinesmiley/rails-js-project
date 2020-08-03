class DropBigWords < ActiveRecord::Migration[6.0]
  def change
    drop_table :big_words
  end
end
