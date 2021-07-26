class AddColumnsToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :chat_count, :integer, default: 0
    add_column :users, :follower_count, :integer, default: 0
    add_column :users, :following_count, :integer, default: 0
  end
end
