class User < ApplicationRecord
  has_secure_password
  has_many :chats, dependent: :destroy
  has_many :replies, dependent: :destroy

  validates :username, presence: true, uniqueness: true, length: { maximum: 15 }
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }, on: :create
  validates :display_name, presence: true, length: { maximum: 25 }
  validates :bio, length: { maximum: 160 }
  # def chat_total
  #   chats.count
  # end
end
