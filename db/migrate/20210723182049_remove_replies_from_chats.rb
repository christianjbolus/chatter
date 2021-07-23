class RemoveRepliesFromChats < ActiveRecord::Migration[6.1]
  def change
    remove_column :chats, :replies, :integer
  end
end
