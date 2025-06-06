class CategoriesController < ApplicationController
  def index
    render json: Category.all
  end

  def show
    category = Category.find_by(id: params[:id])
    if category
      render json: category
    else
      render json: { error: "Category not found" }, status: :not_found
    end
  end


  def create
    category = Category.new(category_params)
    if category.save
      render json: category, status: :created
    else
      render json: { errors: category.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def category_params
    params.require(:category).permit(:name)
  end
end