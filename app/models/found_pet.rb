class FoundPet < ApplicationRecord
  belongs_to :user
  has_many :found_pet_comments

  has_attached_file :pet_image, styles: {
    thumb: '100x100>',
    square: '200x200#',
    medium: '300x300>'
  }
  validates_attachment_content_type :pet_image, :content_type => /\Aimage\/.*\Z/

  def petImage
    self.pet_image(:medium)
  end
end
