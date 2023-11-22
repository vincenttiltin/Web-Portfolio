// fade transition on selected page
document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('fade-in');
}); 

// fade transition on portrait
document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM to be fully loaded

    // Get the portrait element
    var portrait = document.querySelector('.portrait');

    // Set a timeout to add the 'fade-in' class after a short delay
    setTimeout(function() {
        portrait.style.opacity = 1; // Set opacity to 1 after the delay
    }, 500); // Adjust the delay as needed
});



// highlight the current page we are on
document.addEventListener('DOMContentLoaded', function () {
   
    var currentUrl = window.location.href;

    var navLinks = document.querySelectorAll('.nav-link');

    // Iterate through each link and check if its href matches the current page URL
    navLinks.forEach(function (link) {
        if (link.href === currentUrl) {
            // Add a class to highlight the current link
            link.classList.add('active');
        }
    });
});

