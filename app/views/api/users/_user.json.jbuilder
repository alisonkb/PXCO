json.extract! user, :id, :username, :description, :post_ids

json.liked_id user.liked_posts.pluck(:id)
json.followed_id user.followed_users.pluck(:id)
json.image_url asset_path(user.image.url)
