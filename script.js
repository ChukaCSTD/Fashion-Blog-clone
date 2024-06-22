$(document).ready(function() {
    const intervalTime = 7000; // Time in milliseconds
    let currentIndex = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;
    const dots = $('.dot');

    function showNextSlide() {
        slides.eq(currentIndex).fadeOut(1000, function() {
            currentIndex = (currentIndex + 1) % totalSlides;
            slides.eq(currentIndex).fadeIn(1000);
            updateDots();
        });
    }

    function updateDots() {
        dots.removeClass('active');
        dots.eq(currentIndex).addClass('active');
    }

    setInterval(showNextSlide, intervalTime);

    dots.each(function(index) {
        $(this).click(function() {
            slides.eq(currentIndex).fadeOut(1000, function() {
                currentIndex = index;
                slides.eq(currentIndex).fadeIn(1000);
                updateDots();
            });
        });
    });

    slides.eq(currentIndex).show(); // Initialize the first slide
    updateDots(); // Initialize dots on page load

    var isOpen = false;
    $('#nav-toggle').click(function() {
        if (isOpen) {
            $('.navbar').removeClass('navbar-open');
        } else {
            $('.navbar').addClass('navbar-open');
        }
        isOpen = !isOpen;
    });

    var isOpen = true;
    $('#nav-toggler').click(function() {
        if (isOpen) {
            $('.navbar').removeClass('navbar-open');
        } else {
            $('.navbar').addClass('navbar-open');
        }
        isOpen = !isOpen;
    });
});