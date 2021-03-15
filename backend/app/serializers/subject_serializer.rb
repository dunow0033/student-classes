class SubjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :student_id
  belongs_to :student
end
