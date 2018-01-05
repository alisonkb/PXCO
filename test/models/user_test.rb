# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  username           :string
#  password_digest    :string
#  session_token      :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
