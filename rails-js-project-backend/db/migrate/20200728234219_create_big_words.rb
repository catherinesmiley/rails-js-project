class CreateBigWords < ActiveRecord::Migration[6.0]
  def change
    create_table :big_words do |t|
      t.string :name

      t.timestamps
    end
  end
end
