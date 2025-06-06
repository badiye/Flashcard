const categoryContainer = document.getElementById("categories");

async function loadCategories() {
  try {
    const res = await fetch("http://localhost:3000/categories");
    if (!res.ok) throw new Error("Failed to fetch categories");

    const categories = await res.json();
    categoryContainer.innerHTML = ""; // clear existing content

    categories.forEach(category => {
      const card = document.createElement("div");
      card.className = "card";
      card.dataset.category = category.name.toLowerCase();
      card.textContent = `📘 ${category.name}`;

      card.onclick = () => {
        // Redirect to flashcards page with category_id
        window.location.href = `flashcards.html?category_id=${category.id}`;
      };

      categoryContainer.appendChild(card);
    });
  } catch (err) {
    console.error("Error loading categories:", err);
    categoryContainer.innerHTML = "<p style='color:red;'>Failed to load categories.</p>";
  }
}

loadCategories();