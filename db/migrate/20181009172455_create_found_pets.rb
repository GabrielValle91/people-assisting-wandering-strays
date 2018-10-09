class CreateFoundPets < ActiveRecord::Migration[5.2]
  def change
    create_table :found_pets do |t|
      t.string :animal_type
      t.string :city
      t.string :state
      t.string :area
      t.string :gender
      t.string :status
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
