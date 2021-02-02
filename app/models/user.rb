class User < ApplicationRecord
    validates :email, uniqueness: true

    has_many :lobbies, dependent: restrict_with_exception
    has_many :chatmessages
    has_and_belongs_to_many :lobbies

end
