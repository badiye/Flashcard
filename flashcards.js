const flashcards = [];
let currentIndex = 0;
let showingAnswer = false;

const params = new URLSearchParams(window.location.search);
const categoryId = params.get('category_id');

// DOM elements
const titleEl = document.getElementById('category-title');
const cardEl = document.getElementById('flashcard');
const nextBtn = document.getElementById('next-btn');

async function fetchFlashcards() {
  try {
    const response = await fetch(`http://localhost:3000/flashcards?category_id=${categoryId}`);
    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0) {
      cardEl.textContent = "No flashcards available.";
      nextBtn.disabled = true;
      return;
    }

    flashcards.push(...data);

    // Get category name
    const categoryRes = await fetch(`http://localhost:3000/categories/${categoryId}`);
    const categoryData = await categoryRes.json();
    console.log("Category fetch result:", categoryData);
    titleEl.textContent = `Category: ${categoryData.name}`;

    showFlashcard();

  } catch (error) {
    console.error("Error fetching flashcards:", error);
    cardEl.textContent = "Failed to load flashcards.";
  }
}

function showFlashcard() {
  showingAnswer = false;
  const current = flashcards[currentIndex];
  cardEl.textContent = current.question;
}

function toggleFlashcard() {
  if (!flashcards.length) return;
  const current = flashcards[currentIndex];
  cardEl.textContent = showingAnswer ? current.question : current.answer;
  showingAnswer = !showingAnswer;
}

function nextFlashcard() {
  if (!flashcards.length) return;
  currentIndex = (currentIndex + 1) % flashcards.length;
  showFlashcard();
}

// Event listeners
cardEl.addEventListener('click', toggleFlashcard);
nextBtn.addEventListener('click', nextFlashcard);

// Initialize
fetchFlashcards();