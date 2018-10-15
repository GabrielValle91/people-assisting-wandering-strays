class AddPetImageToFoundPets < ActiveRecord::Migration[5.2]
  def self.up
    add_attachment :found_pets, :pet_image
  end

  def self.down
    remove_attachment :found_pets, :pet_image
  end
end
