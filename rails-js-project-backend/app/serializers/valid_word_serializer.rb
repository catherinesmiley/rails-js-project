class ValidWordSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :word
end
