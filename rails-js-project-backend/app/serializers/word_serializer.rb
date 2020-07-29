class WordSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :game
end
