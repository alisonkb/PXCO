class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    render :profile
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :profile
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def follow

    # debugger
    # @follow = Follow.create(follower_id: current_user.id, following_id: User.find(params[:id]).id)
    @follow = Follow.create(following_id: current_user.id, follower_id: User.find(params[:id]).id)
    render json: {follower_id: @follow.follower_id}
  end

  def unfollow

    @follow = Follow.find_by(following_id: current_user.id, follower_id: User.find(params[:id]))
    @follow.destroy!
    render json: {following_id: @follow.following_id}
  end


  private
  def user_params
    params.require(:user).permit(:username, :password, :image, :description)
  end

end
