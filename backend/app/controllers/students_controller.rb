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
      student = Student.create(name: params[:name])

      if student.save
        render json: student
      else
        render json: students
      end
    end

end