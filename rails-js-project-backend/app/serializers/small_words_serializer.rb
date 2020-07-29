class SmallWordsSerializer < ActiveModel::Serializer
  attributes :id, :name
  belongs_to :big_words
end
