window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "flex"; // Changed to flex for centering
    }, 400);
});

// Link to your main website (replace with your actual URL)
document.getElementById("continueBtn").addEventListener("click", () => {
    window.location.href = "home.html"; // Update this!
});