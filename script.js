document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const categoryFilters = document.querySelectorAll("#categoryFilters input");
  const movieCards = document.querySelectorAll(".movie-card");

  function filterMovies() {
    const searchValue = searchInput.value.toLowerCase();
    const activeCategories = Array.from(categoryFilters)
      .filter(cb => cb.checked)
      .map(cb => cb.value);

    movieCards.forEach(card => {
      const title = card.dataset.title.toLowerCase();
      const category = card.dataset.category;

      const matchSearch = title.includes(searchValue);
      const matchCategory = activeCategories.length === 0 || activeCategories.includes(category);

      if (matchSearch && matchCategory) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  searchInput.addEventListener("keyup", filterMovies);
  categoryFilters.forEach(cb => cb.addEventListener("change", filterMovies));
});
