class SubjectSerializer < ActiveModel::Serializer
  attributes :id, :name
  belongs_to :student
end
