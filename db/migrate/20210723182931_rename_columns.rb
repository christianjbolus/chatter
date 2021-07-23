class RenameColumns < ActiveRecord::Migration[6.1]
  def change
    rename_column :chats, :likes, :like_count
    rename_column :chats, :reposts, :repost_count
  end
end
