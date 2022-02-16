class CategoriesController < ApplicationController

    def index
        render json: Category.all
    end

    def show
        render json: find_category
    end

private
    def find_category
        Category.find(params[:id])
    end


end
