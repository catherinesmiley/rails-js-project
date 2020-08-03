class Word < ApplicationRecord
  belongs_to :game, optional: true
  has_many :valid_words

  validates :name, presence: true, length: { minimum: 4 }
end
