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
      student = Student.new(student_params)

      if student.save
        render json: student
      else
        render json: students
      end
    end

    private
    def student_params
      params.require(:student).permit(:name, :age, :about, :subjects)
    end
end