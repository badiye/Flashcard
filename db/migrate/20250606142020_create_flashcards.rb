class CreateFlashcards < ActiveRecord::Migration[8.0]
  def change
    create_table :flashcards do |t|
      t.string :category
      t.string :question
      t.string :answer

      t.timestamps
    end
  end
end
