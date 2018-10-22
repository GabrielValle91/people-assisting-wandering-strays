class AddPetImageToLostPets < ActiveRecord::Migration[5.2]
  def self.up
    add_attachment :lost_pets, :pet_image
  end

  def self.down
    remove_attachment :lost_pets, :pet_image
  end
end
