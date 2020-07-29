class SmallWordSerializer < ActiveModel::Serializer
  attributes :id, :name
  belongs_to :big_word
end
