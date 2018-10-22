class CreateLostPets < ActiveRecord::Migration[5.2]
  def change
    create_table :lost_pets do |t|
      t.string :animal_type
      t.string :name
      t.string :gender
      t.string :breed
      t.string :city
      t.string :state
      t.string :personality
      t.boolean :chipped, default: false
      t.string :status
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
