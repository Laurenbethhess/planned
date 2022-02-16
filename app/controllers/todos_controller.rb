class TodosController < ApplicationController

    def index
        render json: Todo.all
    end

    def show
        render json: find_todo
    end

private
    def find_category
        Todo.find(params[:id])
    end

end
