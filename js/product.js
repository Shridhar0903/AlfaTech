// ==================== FILTER JS ====================

const pills = document.querySelectorAll(".category-pill");
const products = document.querySelectorAll(".product-card");

pills.forEach((pill) => {
  pill.addEventListener("click", () => {
    // Active state
    pills.forEach((p) => p.classList.remove("active"));
    pill.classList.add("active");

    const filter = pill.getAttribute("data-filter");

    products.forEach((product) => {
      const category = product.getAttribute("data-category");

      if (filter === "all" || filter === category) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});
