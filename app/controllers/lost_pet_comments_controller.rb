class LostPetCommentsController < ApiController

  def create
    @lost_pet_comment = LostPetComment.create(lost_pet_params)
    render json: @lost_pet_comment
  end


  private

  def lost_pet_params
    params.require(:lost_pet_comment).permit(:user_id, :lost_pet_id, :comment)
  end
end
