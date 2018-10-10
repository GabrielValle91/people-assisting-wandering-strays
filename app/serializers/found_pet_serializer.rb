class FoundPetSerializer < ActiveModel::Serializer
  attributes :id, :animal_type, :city, :state, :area, :gender, :user_id
  has_many :found_pet_comments
end