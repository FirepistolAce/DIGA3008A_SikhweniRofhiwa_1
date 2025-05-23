
// anime-facts.js - Standalone Anime Fact Generator
document.addEventListener("DOMContentLoaded", function() {
  // Create container
  const factsContainer = document.createElement('div');
  factsContainer.id = 'animeFactsContainer';
  factsContainer.className = 'shadowbox anime-fact-generator';
  factsContainer.style.cssText = `
    width: 700px;
    margin: 20px auto;
    padding: 2rem 3rem;
    background: rgba(0, 58, 58, 0.8);
    border-radius: 20px;
    text-align: center;
    color: #f0f0f0;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    font-family: 'Cinzel', serif;
    animation: fadeInUp 1.5s ease;
  `;

  
  factsContainer.innerHTML = `
    <h2 class="anime-fact-title">Anime Fact Generator</h2>
    <button id="generateFactBtn" class="anime-fact-btn">Generate Fact</button>
    <div id="factDisplay" class="anime-fact-display">
      Click the button to discover an anime fact!
    </div>
  `;

  
  const insertAfterElement = document.querySelector('.shadowbox') || 
                           document.querySelector('.feature-box') || 
                           document.querySelector('main');
  
  if (insertAfterElement) {
    insertAfterElement.insertAdjacentElement('afterend', factsContainer);
  } else {
    document.body.appendChild(factsContainer);
  }

  // Anime facts data i came up with 
  const animeFacts = [
    "The term 'anime' comes from the English word 'animation'.",
    "Studio Ghibli's logo features Totoro from My Neighbor Totoro.",
    "One Piece has sold over 500 million copies worldwide.",
    "Attack on Titan's titans were inspired by drunk people Hayao Miyazaki saw.",
    "Death Note was originally planned to have Light win at the end.",
    "Naruto's ramen obsession comes from Masashi Kishimoto's own love of ramen.",
    "Dragon Ball's Goku was inspired by Sun Wukong from Journey to the West.",
    "The first anime broadcast in space was Space Brothers in 2013."
  ];

  // Generate fact function
  document.getElementById('generateFactBtn').addEventListener('click', function() {
    const display = document.getElementById('factDisplay');
    display.style.animation = 'fadeOut 0.3s forwards';
    
    setTimeout(() => {
      const randomFact = animeFacts[Math.floor(Math.random() * animeFacts.length)];
      display.textContent = randomFact;
      display.style.animation = 'fadeIn 0.5s forwards';
    }, 300);
  });

  // Add animations
  const style = document.createElement('style');
  style.textContent = `
    .anime-fact-title {
      font-size: 2.8rem;
      margin-bottom: 1rem;
      font-family: 'Josefin Sans', sans-serif;
      color: #00ffc3;
    }
    .anime-fact-btn {
      background: rgba(0, 255, 195, 0.2);
      color: #00ffc3;
      border: 2px solid rgba(0, 255, 195, 0.3);
      padding: 12px 24px;
      border-radius: 50px;
      cursor: pointer;
      font-weight: bold;
      margin-bottom: 1.5rem;
      transition: all 0.3s ease;
      font-family: 'Josefin Sans', sans-serif;
      font-size: 1.2rem;
    }
    .anime-fact-btn:hover {
      background: rgba(0, 255, 195, 0.3);
      box-shadow: 0 0 15px rgba(0, 255, 195, 0.4);
    }
    .anime-fact-display {
      min-height: 80px;
      padding: 1.5rem;
      background: rgba(0, 20, 20, 0.6);
      border-radius: 10px;
      font-style: italic;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Noto Serif JP', serif;
      font-size: 1.2rem;
      line-height: 1.6;
      border: 1px solid rgba(0, 255, 195, 0.1);
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeOut {
      from { opacity: 1; transform: translateY(0); }
      to { opacity: 0; transform: translateY(-10px); }
    }
  `;
  document.head.appendChild(style);
});