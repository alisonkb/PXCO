
  json.partial! 'api/users/user', user: @user

  # json.extract! @user, :posts
  # json.array! @user.posts do
  #   @user.posts.each do |post|
  #
  #
  #       json.partial! 'api/posts/post', post: post
  #
  #
  #   end
  # end

# json.array! @user.posts do |post|
#   # json.partial! 'api/posts/post', post: post
#   json.caption post.caption
# end


# json.array! @user.posts :caption

# json.extract! @user, :posts
json.posts do
  @user.posts.each do |post|
    json.set! post.id do


    json.partial! 'api/posts/post', post: post

  end
end
end

# json.set! :post do
#   # @user.posts.map
#   # do |post|
#   json.posts   @user.posts.map :post
#     # json.caption post: post
#     # json.partial! 'api/posts/post', post: post
#
#
# end
