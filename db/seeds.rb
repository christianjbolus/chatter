# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Chat.destroy_all
User.destroy_all

@elon = User.create!(email: 'elon@email.com', username: 'elonmusk', password: 'falcon9', display_name: 'Elon Musk', profile_pic: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg')
@christian = User.create!(email: 'cbolus@email.com', username: 'christianbolus', password: 'monkey', display_name: 'Christian Bolus', profile_pic: 'https://res.cloudinary.com/ditt6ekpx/image/upload/v1626978009/GA%20Project%204/Headshot_Reduced_Cropped_sja1vr.jpg')
@naval = User.create!(email: 'naval@email.com', username: 'naval', password: 'naval1', display_name: 'Naval Ravikant', profile_pic: 'https://theceolibrary.com/media/people-photos/naval-ravikant-books.jpg')

puts "#{User.count} users created"

chats = [
  {
    content: 'Desire is just a contract that you make with yourself to be unhappy until you get what you want',
    likes: 384,
    reposts: 173,
    user: @naval
  },
  {
    content: 'There’s nothing wrong with waiting until the last minute.  The secret is knowing when the last minute is.',
    likes: 12,
    reposts: 6,
    user: @christian
  },
  {
    content: 'Full test duration firing of 3 Raptors on Super Heavy Booster!',
    likes: 120,
    reposts: 87,
    user: @elon
  },
  {
    content: 'I am the Doge father.',
    likes: 243,
    reposts: 45,
    user: @elon
  },
  {
    content: 'The past is entirely contained in your head.  It is nowhere else.  The present is all that exists and this where you exist.',
    likes: 380,
    reposts: 173,
    user: @naval
  },
  {
    content: "You can't determine the quality of a decision based on the outcome.",
    likes: 380,
    reposts: 173,
    user: @christian
  }
]

Chat.create!(chats)

puts "#{Chat.count} chats created"

