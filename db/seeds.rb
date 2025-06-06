# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
Category.destroy_all
Flashcard.destroy_all

math = Category.create!(name: "math")
science = Category.create!(name: "science")
geography = Category.create!(name: "geography")

# Math flashcards
Flashcard.create!(category: math, question: "What is 8 × 7?", answer: "56")
Flashcard.create!(category: math, question: "What is the square root of 64?", answer: "8")
Flashcard.create!(category: math, question: "What is 100 divided by 4?", answer: "25")
Flashcard.create!(category: math, question: "What is 9 + 10?", answer: "19")
Flashcard.create!(category: math, question: "What is 12 × 12?", answer: "144")
Flashcard.create!(category: math, question: "What is 15% of 200?", answer: "30")
Flashcard.create!(category: math, question: "What is the value of pi (approx)?", answer: "3.14")
Flashcard.create!(category: math, question: "What is 81 ÷ 9?", answer: "9")
Flashcard.create!(category: math, question: "What is 7 squared?", answer: "49")
Flashcard.create!(category: math, question: "What is 3 cubed?", answer: "27")

# Science flashcards
Flashcard.create!(category: science, question: "What planet is known as the Red Planet?", answer: "Mars")
Flashcard.create!(category: science, question: "What gas do plants absorb from the atmosphere?", answer: "Carbon Dioxide")
Flashcard.create!(category: science, question: "What is H2O more commonly known as?", answer: "Water")
Flashcard.create!(category: science, question: "How many bones are in the adult human body?", answer: "206")
Flashcard.create!(category: science, question: "What part of the cell contains DNA?", answer: "Nucleus")
Flashcard.create!(category: science, question: "What force keeps us on the ground?", answer: "Gravity")
Flashcard.create!(category: science, question: "What is the chemical symbol for gold?", answer: "Au")
Flashcard.create!(category: science, question: "What gas do humans exhale?", answer: "Carbon Dioxide")
Flashcard.create!(category: science, question: "What organ pumps blood through the body?", answer: "Heart")
Flashcard.create!(category: science, question: "What’s the boiling point of water in Celsius?", answer: "100")

# Geography flashcards
Flashcard.create!(category: geography, question: "What is the capital of Japan?", answer: "Tokyo")
Flashcard.create!(category: geography, question: "Which continent is the Sahara Desert in?", answer: "Africa")
Flashcard.create!(category: geography, question: "Which country has the most people?", answer: "China")
Flashcard.create!(category: geography, question: "What is the largest ocean?", answer: "Pacific Ocean")
Flashcard.create!(category: geography, question: "Which country is Paris in?", answer: "France")
Flashcard.create!(category: geography, question: "Mount Everest is in which mountain range?", answer: "Himalayas")
Flashcard.create!(category: geography, question: "What is the capital of Canada?", answer: "Ottawa")
Flashcard.create!(category: geography, question: "Which U.S. state is known as the Sunshine State?", answer: "Florida")
Flashcard.create!(category: geography, question: "What river flows through Egypt?", answer: "Nile")
Flashcard.create!(category: geography, question: "Which country has Sydney as a major city?", answer: "Australia")