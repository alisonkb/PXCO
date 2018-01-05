
json.extract! post, :id, :caption, :user_id
json.imageUrl asset_path(post.picture.url)

# ajax
# receive images
# make react compondents
# that collects all images
# from that slice of state
#
# and renders
