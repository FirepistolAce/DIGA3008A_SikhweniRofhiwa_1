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
