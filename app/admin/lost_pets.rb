ActiveAdmin.register LostPet do
  permit_params :animal_type, :name, :gender, :breed, :city, :state, :personality, :chipped, :status, :user_id, :lost_pet_comments, :pet_image
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

end
