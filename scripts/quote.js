// ANIME QUOTE API WITH 10+ FALLBACK QUOTES
document.addEventListener('DOMContentLoaded', function() {
  const quoteBtn = document.getElementById('quoteBtn');
  const quoteText = document.getElementById('quoteText');
  const quoteSource = document.getElementById('quoteSource');

  // Using reliable Animechan API
  const API_URL = 'https://animechan.xyz/api/random';

  // Expanded fallback quotes (10+ quotes)
  const FALLBACK_QUOTES = [
    {
      quote: "Hard work is worthless for those that don't believe in themselves.",
      character: "Naruto Uzumaki",
      anime: "Naruto"
    },
    {
      quote: "It's not the face that makes someone a monster, it's the choices they make.",
      character: "Natsu Dragneel",
      anime: "Fairy Tail"
    },
    {
      quote: "The world isn't perfect. But it's there for us, doing the best it can.",
      character: "Roy Mustang",
      anime: "Fullmetal Alchemist"
    },
    {
      quote: "Sometimes I do feel like I'm a failure. Like there's no hope for me. But even so, I'm not gonna give up!",
      character: "Izuku Midoriya",
      anime: "My Hero Academia"
    },
    {
      quote: "If you don't take risks, you can't create a future!",
      character: "Monkey D. Luffy",
      anime: "One Piece"
    },
    {
      quote: "Knowing you're different is only the beginning. Accepting that difference is what makes you whole.",
      character: "Edward Elric",
      anime: "Fullmetal Alchemist"
    },
    {
      quote: "The moment you think of giving up, think of the reason why you held on so long.",
      character: "Natsu Dragneel",
      anime: "Fairy Tail"
    },
    {
      quote: "Power comes in response to a need, not a desire.",
      character: "Son Goku",
      anime: "Dragon Ball Z"
    },
    {
      quote: "Fear is not evil. It tells you what weakness is. And once you know your weakness, you can become stronger as well as kinder.",
      character: "Gildarts Clive",
      anime: "Fairy Tail"
    },
    {
      quote: "No matter how hard or impossible it is, never lose sight of your goal.",
      character: "Eren Yeager",
      anime: "Attack on Titan"
    },
    {
      quote: "If you don't like your destiny, don't accept it. Instead, have the courage to change it the way you want it to be.",
      character: "Naruto Uzumaki",
      anime: "Naruto"
    }
  ];

  async function fetchQuote() {
    try {
      // Set loading state
      quoteBtn.disabled = true;
      quoteBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
      
      // Try API first
      const response = await fetch(API_URL);
      
      if (!response.ok) throw new Error('API failed');
      
      const data = await response.json();
      quoteText.textContent = `"${data.quote}"`;
      quoteSource.textContent = `— ${data.character} (${data.anime})`;
      
    } catch (error) {
      console.error('Error:', error);
      // Use random fallback quote
      const randomIndex = Math.floor(Math.random() * FALLBACK_QUOTES.length);
      const fallback = FALLBACK_QUOTES[randomIndex];
      quoteText.textContent = `"${fallback.quote}"`;
      quoteSource.textContent = `— ${fallback.character} (${fallback.anime})`;
    } finally {
      // Reset button
      quoteBtn.disabled = false;
      quoteBtn.innerHTML = '<i class="fas fa-random"></i> New Quote';
    }
  }

  // Event listeners
  quoteBtn.addEventListener('click', fetchQuote);
  
  // Get initial quote
  fetchQuote();
});