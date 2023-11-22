// fade transition on selected page
document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('fade-in');
}); 

// fade transition on portrait
document.addEventListener("DOMContentLoaded", function() {
    
    var portrait = document.querySelector('.portrait');
    setTimeout(function() {
        portrait.style.opacity = 1; 
    }, 500); 
});



// highlight the current page we are on
document.addEventListener('DOMContentLoaded', function () {
   
    var currentUrl = window.location.href;

    var navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function (link) {
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });
});

