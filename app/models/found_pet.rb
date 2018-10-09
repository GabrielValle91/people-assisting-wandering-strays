class FoundPet < ApplicationRecord
  belongs_to :user
  has_many :found_pet_comments
end
