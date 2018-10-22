class LostPetCommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user
  belongs_to :lost_pet
  belongs_to :user

  def user
    UserSerializer.new(object.user).attributes
  end
end