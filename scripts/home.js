// home.js — Simple dynamic interaction
document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".feature-box");

  if (box) {
    box.addEventListener("mouseenter", () => {
      box.style.boxShadow = "0 0 30px #00ffc3, 0 0 60px #009999";
    });

    box.addEventListener("mouseleave", () => {
      box.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.4)";
    });
  }
});
// Model showcase interaction
const modelCards = document.querySelectorAll('.model-card');
modelCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('expanded');
  });
});

// Skills interaction
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
  item.addEventListener('click', (e) => {
    const skill = item.dataset.skill;
    // Add your custom behavior here
    console.log(`Skill clicked: ${skill}`);
    // Example: Could link to portfolio pieces or show more info
  });
});