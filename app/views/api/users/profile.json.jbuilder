
json.user do
  json.partial! 'api/users/user', user: @user
end


json.posts do
  @user.posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
  @user.likes.each do |like|
    json.set! like.post.id do
      json.partial! 'api/posts/post', post: like.post
    end
  end
end
