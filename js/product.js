const toggleBtn = document.querySelector(".toggle-details");
const expandBox = document.querySelector(".product-expand");
const closeBtn = document.querySelector(".close-btn");

toggleBtn.addEventListener("click", () => {
  expandBox.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  expandBox.classList.remove("active");
});
