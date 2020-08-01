class Word < ApplicationRecord
  belongs_to :game, optional: true

  validates :name, presence: true, length: { minimum: 4 }
end
