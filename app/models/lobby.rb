class Lobby < ApplicationRecord
    belongs_to :user
    has_many :filters
    has_many :chatmessages
    has_and_belongs_to_many :users
end
