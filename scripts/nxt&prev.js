// nxt&prev.js - Blog Navigation Arrows
document.addEventListener('DOMContentLoaded', function() {
    // Get all blog links from your navigation
    const blogLinks = Array.from(document.querySelectorAll('#blog-nav ul li a'));
    
    // Only proceed if we're on a blog page with navigation
    if (blogLinks.length > 0) {
        // Get current blog URL
        const currentPath = window.location.pathname.split('/').pop();
        
        // Find current blog index
        const currentIndex = blogLinks.findIndex(link => 
            link.getAttribute('href').split('/').pop() === currentPath
        );

        // Only add arrows if we found current blog
        if (currentIndex !== -1) {
            createNavigationArrows(currentIndex, blogLinks);
        }
    }

    function createNavigationArrows(currentIndex, links) {
        // Create arrow container
        const arrowContainer = document.createElement('div');
        arrowContainer.className = 'blog-navigation-arrows';
        arrowContainer.style.cssText = `
            position: fixed;
            bottom: 50%;
            left: 0;
            right: 0;
            display: flex;
            justify-content: space-between;
            padding: 0 20px;
            z-index: 1000;
            pointer-events: none;
        `;

        // Create arrows
        const arrowStyle = `
            width: 40px;
            height: 40px;
            background: rgba(9, 224, 206, 0.7);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            cursor: pointer;
            pointer-events: auto;
            transition: all 0.3s ease;
            border: none;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        `;

        // Previous arrow
        if (currentIndex > 0) {
            const prevArrow = document.createElement('button');
            prevArrow.innerHTML = '<i class="fas fa-chevron-left"></i>';
            prevArrow.style.cssText = arrowStyle;
            prevArrow.addEventListener('click', () => {
                window.location.href = links[currentIndex - 1].href;
            });
            arrowContainer.appendChild(prevArrow);
        }

        // Next arrow
        if (currentIndex < links.length - 1) {
            const nextArrow = document.createElement('button');
            nextArrow.innerHTML = '<i class="fas fa-chevron-right"></i>';
            nextArrow.style.cssText = arrowStyle;
            nextArrow.addEventListener('click', () => {
                window.location.href = links[currentIndex + 1].href;
            });
            arrowContainer.appendChild(nextArrow);
        }

        // Add to body
        document.body.appendChild(arrowContainer);

        // Hover effects
        const arrows = arrowContainer.querySelectorAll('button');
        arrows.forEach(arrow => {
            arrow.addEventListener('mouseenter', () => {
                arrow.style.transform = 'scale(1.1)';
                arrow.style.background = 'rgba(9, 224, 206, 0.9)';
            });
            arrow.addEventListener('mouseleave', () => {
                arrow.style.transform = 'scale(1)';
                arrow.style.background = 'rgba(9, 224, 206, 0.7)';
            });
        });
    }
});