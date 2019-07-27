
class Api::SessionsController < ApplicationController
    def create
        user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        #ebugger;
        if user     
            login(user)
            puts "User.id: ", user.id, "name: ", user.username;
            #redirect_to root_url
            render json: {id: user.id, username: user.username}
            #render json: { username: user.username}
        else
           # flash.now[:errors] = ['errors']
            render json: [' Cant signin this user...go away!'], status:404
        end
    end

    def destroy
        @user = current_user
        
        if @user
           logout 
           render json: [1,2,3];
        else
            render json: ['error banana 404'], status:404
        end
    end
end
