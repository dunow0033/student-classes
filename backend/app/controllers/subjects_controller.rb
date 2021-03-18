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
        subject = Subject.create(name: params[:name][:name], student_id: params[:name][:student_id])
  
        if subject.save
          render json: subject
        end
    end

    def destroy
        binding.pry
    end
end
