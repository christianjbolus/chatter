class Chat < ApplicationRecord
  belongs_to :user
  has_many :replies, dependent: :destroy

  validates :content, length: { maximum: 280 }
end
