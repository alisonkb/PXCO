# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  post_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord

  belongs_to :posts
  belongs_to :user
  
end
