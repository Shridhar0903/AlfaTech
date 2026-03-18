const wrapper = document.getElementById("cardWrapper");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentIndex = 0;

const cards = document.querySelectorAll(".cert-card");
const cardWidth = cards[0].offsetWidth + 20;

function updateButtons() {
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= cards.length - 3;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < cards.length - 3) {
    currentIndex++;
    wrapper.style.transform = `translate(-${currentIndex * cardWidth}px, -50%)`;
  }
  updateButtons();
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    wrapper.style.transform = `translate(-${currentIndex * cardWidth}px, -50%)`;
  }
  updateButtons();
});

updateButtons();
