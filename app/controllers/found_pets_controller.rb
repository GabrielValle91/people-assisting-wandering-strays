class FoundPetsController < ApiController

  def index
    @found_pets = FoundPet.all
    render json: @found_pets.to_json
  end

  def show
    @found_pet = FoundPet.find(params[:id])
    # raise @found_pet.inspect
    render json: @found_pet
  end
end
