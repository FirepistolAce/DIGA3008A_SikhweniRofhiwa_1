document.addEventListener('DOMContentLoaded', function() {
  // Essay cards data
  const essays = [
    {
      title: "Essay One",
      description: "A thoughtful exploration of my first topic. Click to read my complete analysis and reflections.",
      link: "essay1.html" // Update with your actual essay page
    },
    {
      title: "Essay Two",
      description: "An in-depth examination of my second subject. Discover my perspectives and conclusions.",
      link: "essay2.html" // Update with your actual essay page
    }
  ];

  // Create essay cards dynamically
  const essayNav = document.getElementById('essay-nav');
  if (essayNav) {
    const ul = document.createElement('ul');
    
    essays.forEach((essay, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <a href="${essay.link}" class="essay-card">
          <div class="essay-text">${essay.title}</div>
          <div class="essay-hover-content">
            <p>${essay.description}</p>
            <span class="essay-read-more">Read Essay</span>
          </div>
        </a>
      `;
      // Stagger animations
      li.style.animationDelay = `${index * 0.1}s`;
      ul.appendChild(li);
    });
    
    essayNav.appendChild(ul);
  }

  // Add subtle background animation to cards on hover
  const cards = document.querySelectorAll('.essay-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const x = e.clientX - this.getBoundingClientRect().left;
      const y = e.clientY - this.getBoundingClientRect().top;
      
      this.style.backgroundPosition = `${x / 20}px ${y / 20}px`;
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.backgroundPosition = 'center';
    });
  });

  // Add a simple reading progress indicator for essay pages
  const essayPost = document.querySelector('.essay-post');
  if (essayPost) {
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.width = '0%';
    progressBar.style.height = '4px';
    progressBar.style.backgroundColor = '#09e0ce';
    progressBar.style.zIndex = '1000';
    progressBar.style.transition = 'width 0.3s ease';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollProgress = (scrollTop / scrollHeight) * 100;
      progressBar.style.width = scrollProgress + '%';
    });
  }

  // Add a "back to top" button for long essays
  if (essayPost && essayPost.offsetHeight > window.innerHeight * 2) {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.style.position = 'fixed';
    backToTop.style.bottom = '20px';
    backToTop.style.right = '20px';
    backToTop.style.width = '50px';
    backToTop.style.height = '50px';
    backToTop.style.borderRadius = '50%';
    backToTop.style.backgroundColor = 'rgba(9, 224, 206, 0.8)';
    backToTop.style.color = 'white';
    backToTop.style.border = 'none';
    backToTop.style.cursor = 'pointer';
    backToTop.style.display = 'none';
    backToTop.style.zIndex = '1000';
    backToTop.style.transition = 'opacity 0.3s';
    
    backToTop.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    });
  }
});