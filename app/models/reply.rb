class Reply < ApplicationRecord
  belongs_to :user
  belongs_to :chat

  validates :content, length: { maximum: 280 }
end
