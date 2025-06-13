window.addEventListener("load", () => {// Hide the loader and show the content after a delay
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "flex"; // Changed to flex for centering
    }, 400);
});

// Add event listener for the continue button
document.getElementById("continueBtn").addEventListener("click", () => {
    window.location.href = "home.html"; // Update this!
});