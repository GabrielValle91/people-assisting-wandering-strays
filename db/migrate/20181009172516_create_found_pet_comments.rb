class CreateFoundPetComments < ActiveRecord::Migration[5.2]
  def change
    create_table :found_pet_comments do |t|
      t.references :user, foreign_key: true
      t.references :found_pet, foreign_key: true
      t.string :comment

      t.timestamps
    end
  end
end
