json.extract! user, :id, :username, :description, :post_ids, :followed_users

json.liked_id user.liked_posts.pluck(:id)
json.image_url asset_path(user.image.url)
