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
        subject = Subject.create(name: params[:name], student_id: params[:student_id])
  
        if subject.save
          render json: subject
        else
          render json: subjects
        end
    end

    def destroy
        binding.pry
    end
end
