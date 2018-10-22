class LostPetSerializer < ActiveModel::Serializer
  attributes :id, :animal_type, :name, :gender, :breed, :city, :state, :personality, :chipped, :user_id, :pet_image, :created_at
  has_many :lost_pet_comments
end