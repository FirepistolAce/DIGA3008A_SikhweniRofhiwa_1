document.addEventListener("DOMContentLoaded", () => {
    // Define blog order (update with your actual filenames)
    const blogOrder = [
        "blog1.html",
        "blog2.html",
        "blog3.html",
        "blog4.html",
        "blog5.html",
        "blog6.html",
        "blog7.html",
        "blog8.html",
        "blog9.html",
        "blog10.html",
          // Add all your blogs here
    ];

    const currentBlog = window.location.pathname.split('/').pop();
    const currentIndex = blogOrder.indexOf(currentBlog);

    // Only proceed if current blog is in the list
    if (currentIndex !== -1) {
        const prevArrow = document.querySelector('.prev');
        const nextArrow = document.querySelector('.next');

        // Update previous arrow (hide if first blog)
        if (currentIndex === 0) {
            prevArrow.style.display = "none";
        } else {
            prevArrow.href = blogOrder[currentIndex - 1];
        }

        // Update next arrow (hide if last blog)
        if (currentIndex === blogOrder.length - 1) {
            nextArrow.style.display = "none";
        } else {
            nextArrow.href = blogOrder[currentIndex + 1];
        }
    } else {
        console.error("Current blog not found in blogOrder array.");
    }
});