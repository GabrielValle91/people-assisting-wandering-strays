class FoundPetSerializer < ActiveModel::Serializer
  attributes :id, :animal_type, :city, :state, :area, :gender, :user_id, :pet_image, :created_at
  has_many :found_pet_comments
end