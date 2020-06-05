class Addid2ToCards < ActiveRecord::Migration[6.0]
  def change
    add_column :cards, :id2, :string
  end
end
