class CreateLostPetComments < ActiveRecord::Migration[5.2]
  def change
    create_table :lost_pet_comments do |t|
      t.references :user, foreign_key: true
      t.references :lost_pet, foreign_key: true
      t.string :comment

      t.timestamps
    end
  end
end
