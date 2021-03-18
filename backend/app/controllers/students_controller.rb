class StudentsController < ApplicationController
    def index
        students = Student.all
        render json: students
    end

    def show
      student = Student.find(params[:id])
      render json: student
    end

    def create
      student = Student.create(name: params[:name], subjects: params[:subjects])

      if student.save
        render json: student
      else
        render json: students
      end
    end

    def destroy
      subject = Subject.find(name: params[:name][:name], student_id: params[:name][:student_id])
  
      if item.destroy
        render json: { id: subject.id }
      end
    end
end