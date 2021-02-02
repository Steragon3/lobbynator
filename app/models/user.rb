class User < ApplicationRecord
    validates :email, uniqueness: true

    has_many :chatmessages
    has_and_belongs_to_many :lobbies, class_name: 'Lobby'

end
