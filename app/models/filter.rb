class Filter < ApplicationRecord
    has_and_belongs_to_many :lobbies
    belongs_to :filtercategory
end
