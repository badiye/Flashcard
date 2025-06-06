const categoryDropdown = document.getElementById("flashcard-category");

// Load categories into dropdown
async function loadCategories() {
  const res = await fetch("http://localhost:3000/categories");
  if (!res.ok) {
    alert("Failed to load categories");
    return;
  }
  const categories = await res.json();

  categoryDropdown.innerHTML = "";
  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat.id;
    option.textContent = cat.name;
    categoryDropdown.appendChild(option);
  });
}

// Create a new category
async function createCategory() {
  const name = document.getElementById("category-name").value.trim();
  if (!name) {
    alert("Please enter a category name");
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category: { name } })
    });

    if (res.ok) {
      alert("Category added!");
      document.getElementById("category-name").value = "";
      loadCategories(); // reload dropdown
    } else {
      const errorData = await res.json();
      alert("Failed to add category: " + (errorData.errors || "Unknown error"));
    }
  } catch (error) {
    alert("Network error: " + error.message);
  }
}

// Create a new flashcard
async function createFlashcard() {
  const question = document.getElementById("flashcard-question").value.trim();
  const answer = document.getElementById("flashcard-answer").value.trim();
  const categoryId = categoryDropdown.value;

  if (!question || !answer || !categoryId) {
    return alert("Fill all flashcard fields");
  }

  try {
    const res = await fetch("http://localhost:3000/flashcards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        flashcard: { question, answer, category_id: categoryId }
      })
    });

    if (res.ok) {
      alert("Flashcard added!");
      document.getElementById("flashcard-question").value = "";
      document.getElementById("flashcard-answer").value = "";
    } else {
      alert("Failed to add flashcard");
    }
  } catch (error) {
    alert("Network error: " + error.message);
  }
}

// Initial load
loadCategories();