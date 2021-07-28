# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Chat.destroy_all
User.destroy_all

@elon =
  User.create!(
    email: 'elon@email.com',
    username: 'elonmusk',
    password: 'falcon9',
    display_name: 'Elon Musk',
    profile_pic:
      'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
    chat_count: 2,
  )
@christian =
  User.create!(
    email: 'cbolus@email.com',
    username: 'christianbolus',
    password: 'monkey',
    display_name: 'Christian Bolus',
    profile_pic:
      'https://res.cloudinary.com/ditt6ekpx/image/upload/v1626978009/GA%20Project%204/Headshot_Reduced_Cropped_sja1vr.jpg',
    bio:
      'Developer of software. Player of drums. Taker of photographs. Baker of sourdough. Lifelong learner.',
    chat_count: 2,
  )
@naval =
  User.create!(
    email: 'naval@email.com',
    username: 'naval',
    password: 'naval1',
    display_name: 'Naval Ravikant',
    profile_pic:
      'https://theceolibrary.com/media/people-photos/naval-ravikant-books.jpg',
    chat_count: 4,
  )

@suntzu =
  User.create!(
    email: 'sun@email.com',
    username: 'suntzu',
    password: 'sun123',
    display_name: 'Sun Tzu',
    profile_pic:
      'https://images-na.ssl-images-amazon.com/images/I/51bDqL9HJiL._SX450_.jpg',
    chat_count: 4,
  )

@jb =
  User.create!(
    email: 'jamesb@email.com',
    username: 'jamesbaldwin',
    password: 'baldy3',
    display_name: 'James Baldwin',
    profile_pic:
      'https://upload.wikimedia.org/wikipedia/commons/f/f3/James_Baldwin_37_Allan_Warren_%28cropped%29.jpg',
    chat_count: 4,
  )
@mlk =
  User.create!(
    email: 'mlk@email.com',
    username: 'mlk',
    password: 'martin1',
    display_name: 'Martin Luther King Jr.',
    profile_pic:
      'https://www.biography.com/.image/t_share/MTE5NTU2MzE2MjgwNDg5NDgz/martin-luther-king-jr-9365086-2-402.jpg',
    chat_count: 4,
  )

puts "#{User.count} users created"

chats = [
  {
    content:
      'Desire is just a contract that you make with yourself to be unhappy until you get what you want',
    like_count: rand(1..999),
    repost_count: rand(1..200),
    user: @naval,
  },
  {
    content:
      'The past is entirely contained in your head.  It is nowhere else.  The present is all that exists and this where you exist.',
    like_count: rand(1..999),
    repost_count: rand(1..200),
    user: @naval,
  },
  {
    content: "It's easier to change yourself than to change the world.",
    like_count: rand(1..999),
    repost_count: rand(1..200),
    user: @naval,
  },
  {
    content:
      'A rational person can find peace by cultivating indifference to things outside their control.',
    like_count: rand(1..999),
    repost_count: rand(1..200),
    user: @naval,
  },
  {
    content:
      'There’s nothing wrong with waiting until the last minute.  The secret is knowing when the last minute is.',
    like_count: rand(1..999),
    repost_count: rand(1..200),
    user: @christian,
  },
  {
    content:
      "You can't determine the quality of a decision based on the outcome.",
    like_count: rand(1..999),
    repost_count: rand(1..200),
    user: @christian,
  },
  {
    content: 'Full test duration firing of 3 Raptors on Super Heavy Booster!',
    like_count: rand(1..999),
    repost_count: rand(1..200),
    user: @elon,
  },
  {
    content: 'I am the Doge father.',
    like_count: rand(1..999),
    repost_count: rand(1..200),
    user: @elon,
  },
  {
    content:
      'Those who attack space maybe don’t realize that space represents hope for so many people.',
    like_count: rand(1..999),
    repost_count: rand(1..200),
    user: @elon,
  },
  {
    content:
      "To fight and conquer in all your battles is not supreme excellence; supreme excellence consists in breaking the enemy's resistance without fighting.",
    like_count: rand(1..999),
    repost_count: rand(1..200),
    user: @suntzu,
  },
  {
    content: 'He will win who knows when to fight and when not to fight.',
    like_count: rand(1..999),
    repost_count: rand(1..200),
    user: @suntzu,
  },
  {
    content:
      'Energy may be likened to the bending of a crossbow; decision, to the releasing of the trigger.',
    like_count: rand(1..999),
    repost_count: rand(1..200),
    user: @suntzu,
  },
  {
    content: 'In war, practice dissimulation, and you will succeed.',
    like_count: rand(1..999),
    repost_count: rand(1..200),
    user: @suntzu,
  },
  {
    content:
      'Not everything that is faced can be changed, but nothing can be changed until it is faced.',
    like_count: rand(1..999),
    repost_count: rand(1..200),
    user: @jb,
  },
  {
    content:
      'It is certain, in any case, that ignorance, allied with power, is the most ferocious enemy justice can have.',
    like_count: rand(1..999),
    repost_count: rand(1..200),
    user: @jb,
  },
  {
    content:
      'Nothing is more desirable than to be released from affliction, but nothing is more frightening than to be divested of a crutch.',
    like_count: rand(1..999),
    repost_count: rand(1..200),
    user: @jb,
  },
  {
    content:
      'Children have never been very good at listening to their elders, but they have never failed to imitate them.',
    like_count: rand(1..999),
    repost_count: rand(1..200),
    user: @jb,
  },
  {
    content:
      'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.',
    like_count: rand(1..999),
    repost_count: rand(1..200),
    user: @mlk,
  },
  {
    content:
      'The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.',
    like_count: rand(1..999),
    repost_count: rand(1..200),
    user: @mlk,
  },
  {
    content:
      'I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin, but by the content of their character.',
    like_count: rand(1..999),
    repost_count: rand(1..200),
    user: @mlk,
  },
  {
    content:
      'We must learn to live together as brothers or perish together as fools.',
    like_count: rand(1..999),
    repost_count: rand(1..200),
    user: @mlk,
  },
]

Chat.create!(chats.shuffle)

puts "#{Chat.count} chats created"
