class CreateSubjects < ActiveRecord::Migration[6.0]
  def change
    create_table :subjects do |t|
      t.string :name
      t.string :description
      t.integer :student_id

      t.timestamps
    end
  end
end
