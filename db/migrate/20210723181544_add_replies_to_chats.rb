class AddRepliesToChats < ActiveRecord::Migration[6.1]
  def change
    add_column :chats, :replies, :integer
  end
end
