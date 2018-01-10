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
    @posts = Post.all.includes(:user)
  end

  # def edit
  # end

  def like
    @like = Like.create(user_id: current_user.id, post_id: Post.find(params[:id]).id)
    render json: {post_id: @like.post_id}
  end

  def unlike
    @like = Like.find_by(user_id: current_user.id, post_id: Post.find(params[:id]))
    @like.destroy!
    render json: {post_id: @like.post_id}

  end

  private

  def post_params
    params.require(:post).permit(:caption, :picture)
  end



end
