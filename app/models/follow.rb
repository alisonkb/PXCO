# == Schema Information
#
# Table name: follows
#
#  id           :integer          not null, primary key
#  follower_id  :integer
#  following_id :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Follow < ApplicationRecord

  validates :follower, uniqueness: {scope: :following}
  validates :following, uniqueness: {scope: :follower}

  belongs_to :follower,
  class_name: 'User',
  foreign_key: :follower_id

  belongs_to :following,
  class_name: 'User',
  foreign_key: :following_id



end
