class Filter < ApplicationRecord
    has_many :lobbies
    belongs_to :filtercategory
end
