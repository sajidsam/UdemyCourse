document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu
    const toggleButton = document.querySelector('.navbar_mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar_mobile-menu-items');

    toggleButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });

    // Video Modla
    const modal = document.getElementById('videoModal');
    const videoButton = document.querySelector('.preview_video-button');
    const closeButton = document.querySelector('.modal_close-button');
    const videoPlayer = document.getElementById('videoPlayer');

    // Open modal
    videoButton.addEventListener('click', function () {
        // Show modal
        modal.style.display = 'block';


       videoPlayer.src = 'https://www.youtube.com/embed/GxmfcnU3feo';

        // Close modal
        closeButton.addEventListener('click', function () {
            modal.style.display = 'none';
            videoPlayer.src = '';
        });
        
        window.addEventListener('click', function (event) {
            if (event.target == modal) {
                modal.style.display = 'none';
                videoPlayer.src = '';
            }
        });
    });
});


// Navigation background on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 0) {
        navbar.classList.add('navbar--scroll');
    } else {
        navbar.classList.remove('navbar--scroll');
    }
});
