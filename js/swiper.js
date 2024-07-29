
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var slides = document.getElementsByClassName("slide");
    var sliderWrapper = document.querySelector('.slider-wrapper');
    var totalSlides = slides.length;

    if (n > totalSlides) { slideIndex = 1; }
    if (n < 1) { slideIndex = totalSlides; }

    var newTransformValue = -(slideIndex - 1) * 100; // In percentage

    sliderWrapper.style.transform = 'translateX(' + newTransformValue + '%)';
}


//For the parallax effect
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY; // Corrected property
    var backgroundPosition = scrollPosition * -0.4; // Adjust the 0.5 to control the speed of the movement
    document.getElementById('service1').style.backgroundPositionY = backgroundPosition + 'px';
    document.getElementById('service2').style.backgroundPositionY = backgroundPosition + 'px';
    document.getElementById('service3').style.backgroundPositionY = backgroundPosition + 'px';
});

