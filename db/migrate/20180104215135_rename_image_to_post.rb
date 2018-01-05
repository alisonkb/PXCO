class RenameImageToPost < ActiveRecord::Migration[5.1]
  def change
    rename_table :images, :posts
  end
end
