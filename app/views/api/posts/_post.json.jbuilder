
json.extract! post, :id, :caption, :user_id
json.liker_ids post.likes.pluck(:user_id)
json.imageUrl asset_path(post.picture.url)
