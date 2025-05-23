/**
 * Blog Navigation Script
 * Adds next/previous buttons to blog posts
 * Follows teacher's criteria for DOM manipulation and event handling
 */

// Wait until DOM is fully loaded before running our code
document.addEventListener('DOMContentLoaded', function() {
    // Configuration - Update these to match your blog setup
    const BLOG_PREFIX = 'blog';       // Example: "blog" for blog1.html, blog2.html
    const TOTAL_BLOGS = 10;            // Total number of blog posts you have
    const BLOG_DIR = '/blog/';        // Where your blogs are stored
    
    // Get current blog number from the URL (e.g., "blog3.html" -> 3)
    const currentUrl = window.location.pathname;
    const currentBlogNum = extractBlogNumber(currentUrl, BLOG_PREFIX);
    
    // Only add buttons if we're on a valid blog page
    if (currentBlogNum !== null) {
        createNavigationButtons(currentBlogNum, TOTAL_BLOGS, BLOG_PREFIX, BLOG_DIR);
    }

    /**
     * Extracts the blog number from the URL
     * @param {string} url - Current page URL
     * @param {string} prefix - Blog filename prefix
     * @returns {number|null} - Blog number or null if not found
     */
    function extractBlogNumber(url, prefix) {
        const filename = url.split('/').pop(); // Gets "blog2.html"
        const match = filename.match(new RegExp(`${prefix}(\\d+)\\.html`));
        
        if (match && match[1]) {
            return parseInt(match[1]);
        }
        return null;
    }

    /**
     * Creates and inserts the navigation buttons
     * @param {number} currentNum - Current blog number
     * @param {number} totalBlogs - Total number of blogs
     * @param {string} prefix - Blog filename prefix
     * @param {string} dir - Directory where blogs are stored
     */
    function createNavigationButtons(currentNum, totalBlogs, prefix, dir) {
        // Create container div for our buttons
        const navContainer = document.createElement('div');
        navContainer.className = 'blog-nav-container';
        navContainer.style.cssText = `
            display: flex;
            justify-content: space-between;
            margin: 40px 0;
            padding: 20px 0;
            border-top: 1px solid rgba(9, 224, 206, 0.3);
        `;

        // Create Previous button if not on first blog
        if (currentNum > 1) {
            const prevBtn = createNavButton(
                'Previous',
                `${dir}${prefix}${currentNum - 1}.html`,
                'fas fa-arrow-left',
                false
            );
            navContainer.appendChild(prevBtn);
        }

        // Create Next button if not on last blog
        if (currentNum < totalBlogs) {
            const nextBtn = createNavButton(
                'Next',
                `${dir}${prefix}${currentNum + 1}.html`,
                'fas fa-arrow-right',
                true
            );
            navContainer.appendChild(nextBtn);
        }

        // Try to insert buttons at end of blog content
        const blogContent = document.querySelector('.blog-post') || 
                           document.querySelector('.scrollable-content') || 
                           document.querySelector('body');
        
        if (blogContent) {
            blogContent.appendChild(navContainer);
        }
    }

    /**
     * Creates a single navigation button
     * @param {string} text - Button text
     * @param {string} targetUrl - URL to navigate to
     * @param {string} iconClass - Font Awesome icon class
     * @param {boolean} isNext - Whether this is a "next" button
     * @returns {HTMLAnchorElement} - The created button
     */
    function createNavButton(text, targetUrl, iconClass, isNext) {
        const btn = document.createElement('a');
        btn.href = targetUrl;
        btn.className = 'blog-nav-btn';
        btn.innerHTML = `
            <i class="${iconClass}"></i>
            <span>${text}</span>
        `;
        
        // Style the button (using your site's color scheme)
        btn.style.cssText = `
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 20px;
            background: rgba(9, 224, 206, 0.2);
            color: #09e0ce;
            border-radius: 5px;
            text-decoration: none;
            transition: all 0.3s ease;
            border: 1px solid rgba(9, 224, 206, 0.3);
            font-family: "Gelasio", serif;
            ${isNext ? 'margin-left: auto;' : ''}
        `;

        // Add hover effects
        btn.addEventListener('mouseenter', () => {
            btn.style.background = 'rgba(9, 224, 206, 0.3)';
            btn.style.transform = 'translateY(-2px)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.background = 'rgba(9, 224, 206, 0.2)';
            btn.style.transform = 'none';
        });

        return btn;
    }
});