document.addEventListener("DOMContentLoaded", () => {
    // Hide arrows if at first/last blog (optional)
    const currentBlog = window.location.pathname.split('/').pop();
    const blogOrder = ["blog1.html", "blog2.html", "blog3.html", "blog4.html"]; // Update with your blog filenames
    
    const prevArrow = document.querySelector('.prev');
    const nextArrow = document.querySelector('.next');

    // Disable arrows if no previous/next blog exists
    if (blogOrder.indexOf(currentBlog) === 0) {
        prevArrow.style.opacity = "0.5";
        prevArrow.style.pointerEvents = "none";
    }
    if (blogOrder.indexOf(currentBlog) === blogOrder.length - 1) {
        nextArrow.style.opacity = "0.5";
        nextArrow.style.pointerEvents = "none";
    }
});