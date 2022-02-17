class TodoSerializer < ActiveModel::Serializer
  attributes :id, :todo, :importance, :category, :category_id, :user_id
  has_one :category
  has_one :user
end
