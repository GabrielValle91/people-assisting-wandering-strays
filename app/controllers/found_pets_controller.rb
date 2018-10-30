class FoundPetsController < ApiController

  def index
    @found_pets = FoundPet.all
    render json: @found_pets
  end

  def show
    @found_pet = FoundPet.find(params[:id])
    render json: @found_pet
  end

  def create
    @found_pet = FoundPet.create(found_pet_params)
    @found_pet.status = "Open"
    @found_pet.save
    render json: @found_pet
  end

  def update
    @found_pet = FoundPet.find(params[:id])
    @found_pet.status = params[:found_pet][:status]
    @found_pet.save
  end

  private

  def found_pet_params
    params.require(:found_pet).permit(:animal_type, :gender, :city, :state, :area, :pet_image, :user_id, :status)
  end
end
