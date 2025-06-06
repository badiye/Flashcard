class AddCategoryIdToFlashcards < ActiveRecord::Migration[8.0]
  def change
    add_reference :flashcards, :category, null: false, foreign_key: true
  end
end
