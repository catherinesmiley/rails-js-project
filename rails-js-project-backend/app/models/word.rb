class Word < ApplicationRecord
  belongs_to :game, optional: true
end
