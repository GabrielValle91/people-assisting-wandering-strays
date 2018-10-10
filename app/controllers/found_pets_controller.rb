class FoundPetsController < ApiController

  def index
    @found_pets = FoundPet.all
    render json: @found_pets.to_json
  end

  def show
    @found_pet = FoundPet.find(params[:id])
    render json: @found_pet.to_json
  end
end
