class Word < ApplicationRecord
  belongs_to :game, optional: true

  validates :name, presence: true
end
