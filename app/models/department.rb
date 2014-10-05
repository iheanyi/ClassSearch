class Department < ActiveRecord::Base
  has_many :courses

  validates :name, presence: true
  validates :tag, presence: true, uniqueness: true
end
