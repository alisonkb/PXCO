# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = [
  ["alison", "password"],
  ["pat_bombard", "password"],
  ["aaronohaaron", "password"],
  ["dan_sjo", "password"],
  ["demo-user", "password"],
  ["reginedavid", "password"]
]

users.each do |name, password|
  User.create(username: name, password: password)
end

# images =[
#   [User.find_by_username("aaronohaaron").id, File.open(File.join(Rails.root, 'abern2.jpg'))]
# ]
#
# images.each do |user_id, picture|
#   Post.create(user_id: user_id, picture: picture)
# end
