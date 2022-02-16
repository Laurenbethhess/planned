class TodoSerializer < ActiveModel::Serializer
  attributes :id, :todo, :importance, :category
  has_one :category
end
