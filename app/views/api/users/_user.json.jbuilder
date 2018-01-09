json.extract! user, :id, :username, :description
json.liked_id user.liked_posts.pluck(:id)
json.image_url asset_path(user.image.url)
