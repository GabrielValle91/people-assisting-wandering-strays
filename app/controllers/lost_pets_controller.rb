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
    @lost_pet.status = "Open"
    @lost_pet.save
    render json: @lost_pet
  end

  def update
    @lost_pet = LostPet.find(params[:id])
    @lost_pet.status = params[:lost_pet][:status]
    @lost_pet.save
  end

  private

  def lost_pet_params
    params.require(:lost_pet).permit(:animal_type, :name, :gender, :breed, :city, :state, :personality, :chipped, :user_id, :pet_image, :status)
  end
end
