# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')

user = User.create!(email: "test@abc.com", username: "testuser", password: "testing")
boomer = FoundPet.create!(animal_type: "dog", city: "Austin", state: "TX", area: "under stairs in aparment complex on I35 feeder north of Howard Lane", gender: "male", status: "open", user_id: 1)
boomer.found_pet_comments.create!(user_id: 1, comment: "Very friendly and seemingly well trained dog")