class BigWordsSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :small_words
end
