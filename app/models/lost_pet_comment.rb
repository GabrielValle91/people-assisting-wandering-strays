class LostPetComment < ApplicationRecord
  belongs_to :user
  belongs_to :lost_pet
end
