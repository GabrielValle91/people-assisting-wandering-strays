class LostPetsController < ApiController

  def index
    @lost_pets = LostPet.all
    render json: @lost_pets
  end

  def show
    @lost_pet = LostPet.find(params[:id])
    render json: @lost_pet
  end

  def create
    @lost_pet = LostPet.create(lost_pet_params)
    render json: @lost_pet
  end


  private

  def lost_pet_params
    params.require(:lost_pet).permit(:animal_type, :name, :gender, :breed, :city, :state, :personality, :chipped, :user_id, :pet_image)
  end
end
