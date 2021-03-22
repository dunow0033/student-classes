class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :about
  has_many :subjects
end
