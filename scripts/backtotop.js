
document.addEventListener('DOMContentLoaded', function() {
  // Create the button element
  const backToTopBtn = document.createElement('button');
  backToTopBtn.id = 'back-to-top';
  backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  backToTopBtn.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(backToTopBtn);

// Styling the button
  backToTopBtn.style.position = 'fixed';
  backToTopBtn.style.bottom = '20px';
  backToTopBtn.style.right = '20px';
  backToTopBtn.style.width = '50px';
  backToTopBtn.style.height = '50px';
  backToTopBtn.style.borderRadius = '50%';
  backToTopBtn.style.backgroundColor = 'rgba(9, 224, 206, 0.8)';
  backToTopBtn.style.color = 'white';
  backToTopBtn.style.border = 'none';
  backToTopBtn.style.cursor = 'pointer';
  backToTopBtn.style.display = 'none';
  backToTopBtn.style.zIndex = '1000';
  backToTopBtn.style.transition = 'opacity 0.3s, transform 0.3s';
  
  // Add hover effect
  backToTopBtn.addEventListener('mouseenter', () => {
    backToTopBtn.style.transform = 'scale(1.1)';
    backToTopBtn.style.boxShadow = '0 0 10px rgba(9, 224, 206, 0.5)';
  });
  
  backToTopBtn.addEventListener('mouseleave', () => {
    backToTopBtn.style.transform = 'scale(1)';
    backToTopBtn.style.boxShadow = 'none';
  });

  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.display = 'block';
      backToTopBtn.style.opacity = '1';
    } else {
      backToTopBtn.style.opacity = '0';
      setTimeout(() => {
        if (window.pageYOffset <= 300) {
          backToTopBtn.style.display = 'none';
        }
      }, 300);
    }
  });

  // Smooth scroll to top when clicked
  backToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});