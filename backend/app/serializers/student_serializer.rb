class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :subjects
end
