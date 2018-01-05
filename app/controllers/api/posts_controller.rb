class Api::PostsController < ApplicationController

  def show
    @post = Post.find(params[:id])
  end

  def create
    @post = current_user.posts.new(post_params)
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end
  #
  # def destroy
  # end

  def index
    @posts = Post.all

  end

  # def edit
  # end

  private

  def post_params
    params.require(:post).permit(:caption, :picture)
  end



end
