class FoundPetCommentsController < ApiController

  def create
    @found_pet_comment = FoundPetComment.create(found_pet_params)
    render json: @found_pet_comment
  end


  private

  def found_pet_params
    params.require(:found_pet_comment).permit(:user_id, :found_pet_id, :comment)
  end
end
