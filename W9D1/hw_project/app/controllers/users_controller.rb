class UsersController < ApplicationController
   def index
      @users = User.all
      self.render :index
      #render plain: "Oh Hello!"
   end

   def show
      render json: User.find(params[:id])
   end

   def create
      User.create!(user_params)
   end

   private

   def user_params
    params.require(:user).permit(:name, :email)
  end
end
