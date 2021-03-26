class Subject < ApplicationRecord
    belongs_to :student
    validate :subject_count_valid?

    private

    def subject_count_valid?
        if self.student.subjects.length > 4
            self.errors.add(:max_subject, "Remove some classes first")
        end
    end
end