class User < ApplicationRecord
  has_many :chats
  has_many :replies
end
