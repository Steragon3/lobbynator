class Lobby < ApplicationRecord
   
    has_many :filters
    belongs_to :user
    has_many :chatmessages
    has_and_belongs_to_many :users, class_name: 'User'
end
