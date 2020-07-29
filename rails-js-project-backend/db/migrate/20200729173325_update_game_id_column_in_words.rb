class UpdateGameIdColumnInWords < ActiveRecord::Migration[6.0]
  def change
    change_column_null :words, :game_id, true
  end
end
