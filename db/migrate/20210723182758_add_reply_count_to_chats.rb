class AddReplyCountToChats < ActiveRecord::Migration[6.1]
  def change
    add_column :chats, :reply_count, :integer
  end
end
