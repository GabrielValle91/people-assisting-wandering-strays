class FoundPetComment < ApplicationRecord
  belongs_to :user
  belongs_to :found_pet
end
