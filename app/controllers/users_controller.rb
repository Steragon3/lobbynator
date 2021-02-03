class UsersController < ApplicationController
    def show
        @user = User.find(params[:id])
        @joinedLobbies = @user.lobbies
    end
end
