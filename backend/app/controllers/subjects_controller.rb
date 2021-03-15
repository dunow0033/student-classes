class SubjectsController < ApplicationController
    def index
        subjects = Subject.all
        render json: subjects
    end

    def show
        subject = Subject.find(params[:id])
        render json: subject
    end

    def create
        subject = Subject.create(name: params[:name])
  
        if student.save
          render json: student
        else
          render json: students
        end
    end

    def destroy
        binding.pry
    end
end
