class User < ApplicationRecord
  has_secure_password
  has_many :chats
  has_many :replies

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }, on: :create
  def chat_total
    chats.count 
  end
end
