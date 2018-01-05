# == Schema Information
#
# Table name: posts
#
#  id                   :integer          not null, primary key
#  caption              :string
#  user_id              :integer
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  picture_file_name    :string
#  picture_content_type :string
#  picture_file_size    :integer
#  picture_updated_at   :datetime
#

class Post < ApplicationRecord

  validates :user_id, presence: true

  belongs_to :user

  has_attached_file :picture, default_url: "hover.jpg"
  validates_attachment_content_type :picture, content_type: /\Aimage\/.*\Z/


end
