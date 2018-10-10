class FoundPetCommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user
  belongs_to :found_pet
  belongs_to :user

  def user
    UserSerializer.new(object.user).attributes
  end
end