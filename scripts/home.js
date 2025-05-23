// home.js — All your existing code plus anime fact generator
document.addEventListener("DOMContentLoaded", () => {
  // Your existing feature-box hover effect
  const box = document.querySelector(".feature-box");
  if (box) {
    box.addEventListener("mouseenter", () => {
      box.style.boxShadow = "0 0 30px #00ffc3, 0 0 60px #009999";
    });
    box.addEventListener("mouseleave", () => {
      box.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.4)";
    });
  }

  // Your existing model showcase interaction
  const modelCards = document.querySelectorAll('.model-card');
  modelCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('expanded');
    });
  });

  // Your existing skills interaction
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const skill = item.dataset.skill;
      console.log(`Skill clicked: ${skill}`);
    });
  });

  // Anime Fact Generator - Styled to match your theme
  const factsContainer = document.createElement('div');
  factsContainer.id = 'animeFactsBox';
  factsContainer.className = 'shadowbox'; // Reusing your shadowbox class
  factsContainer.style.cssText = `
    width: 80%;
    max-width: 700px;
    margin: 2rem auto;
    padding: 2rem;
    background: rgba(0, 58, 58, 0.8);
    border-radius: 20px;
    text-align: center;
    color: #f0f0f0;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    font-family: 'Cinzel', serif;
    animation: fadeInUp 1.5s ease;
  `;

  // Title with your Josefin Sans font
  const title = document.createElement('h2');
  title.textContent = 'Anime Fact Generator';
  title.style.cssText = `
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-family: 'Josefin Sans', sans-serif;
    color: #00ffc3;
  `;
  factsContainer.appendChild(title);

  // Generate button styled to match your theme
  const generateBtn = document.createElement('button');
  generateBtn.textContent = 'Generate Fact';
  generateBtn.style.cssText = `
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
    font-size: 1rem;
  `;
  generateBtn.addEventListener('mouseover', () => {
    generateBtn.style.background = 'rgba(0, 255, 195, 0.3)';
    generateBtn.style.boxShadow = '0 0 15px rgba(0, 255, 195, 0.4)';
  });
  generateBtn.addEventListener('mouseout', () => {
    generateBtn.style.background = 'rgba(0, 255, 195, 0.2)';
    generateBtn.style.boxShadow = 'none';
  });
  factsContainer.appendChild(generateBtn);

  // Fact display area with your Noto Serif JP font
  const factDisplay = document.createElement('div');
  factDisplay.id = 'animeFactDisplay';
  factDisplay.style.cssText = `
    min-height: 100px;
    padding: 1.5rem;
    background: rgba(0, 20, 20, 0.6);
    border-radius: 10px;
    font-style: italic;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Noto Serif JP', serif;
    font-size: 1.1rem;
    line-height: 1.6;
    border: 1px solid rgba(0, 255, 195, 0.1);
  `;
  factDisplay.textContent = 'Click the button to discover an anime fact!';
  factsContainer.appendChild(factDisplay);

  // Anime facts data
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

  // Position after feature-box
  const welcomeBox = document.querySelector('.feature-box');
  if (welcomeBox) {
    welcomeBox.insertAdjacentElement('afterend', factsContainer);
  } else {
    document.querySelector('.content-sections')?.insertAdjacentElement('beforebegin', factsContainer);
  }

  // Generate fact function with smooth animations
  generateBtn.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * animeFacts.length);
    const randomFact = animeFacts[randomIndex];
    
    factDisplay.style.animation = 'fadeOut 0.3s forwards';
    
    setTimeout(() => {
      factDisplay.textContent = randomFact;
      factDisplay.style.animation = 'fadeIn 0.5s forwards';
      generateBtn.style.boxShadow = '0 0 20px rgba(0, 255, 195, 0.6)';
      setTimeout(() => generateBtn.style.boxShadow = 'none', 1000);
    }, 300);
  });

  // Add animations to match your existing ones
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeOut {
      from { opacity: 1; transform: translateY(0); }
      to { opacity: 0; transform: translateY(-10px); }
    }
    #animeFactsBox {
      transition: all 0.3s ease;
    }
    #animeFactDisplay {
      transition: all 0.3s ease;
    }
  `;
  document.head.appendChild(style);
});