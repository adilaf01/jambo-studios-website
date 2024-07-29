
// Initialize EmailJS with your user ID
emailjs.init('YOUR_USER_ID');

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const name = form.name.value;
    const companyName = form['company-name'].value;
    const email = form.email.value;
    const service = form.service.value;
    const subject = form.subject.value;
    const message = form.message.value;

    // Send email with EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: name,
        company_name: companyName,
        from_email: email,
        service: service,
        subject: subject,
        message: message
    }).then(function(response) {
        alert('Message sent successfully!');
        form.reset(); // Reset the form fields after successful submission
    }, function(error) {
        alert('Failed to send message.');
        console.error('Error sending email:', error);
    });
});

// Function to update subject field based on inputs
function updateSubject() {
    const name = document.getElementById('name').value.trim();
    const companyName = document.getElementById('company-name').value.trim();
    const service = document.getElementById('service').value;
    const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, '');

    let subject = `${currentDate}-`;
    if (companyName !== '') {
        subject += `${companyName.replace(/ /g, '_')}-`;
    }
    if (name !== '') {
        subject += `${name.replace(/ /g, '_')}-`;
    }
    subject += `${service.replace(/ /g, '_')}-INQUIRY`.toUpperCase();

    document.getElementById('subject').value = subject;
}

// Add event listeners to update subject field
document.getElementById('name').addEventListener('input', updateSubject);
document.getElementById('company-name').addEventListener('input', updateSubject);
document.querySelectorAll('.service-button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.service-button').forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
        document.getElementById('service').value = this.getAttribute('data-value');
        updateSubject();
    });
});

// Initial update when the page loads
updateSubject();


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting normally
        popup.style.display = 'flex'; // Show the popup
    });

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none'; // Hide the popup
    });
});



/* The window.onload function makes 'recent' work appear as a default setting when
users enter or reload the page --------------------------------------------------*/

//===============================Mobile mode navbar close================================================//
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelectorAll('#hamitems a');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (hamburger.checked) {
                hamburger.checked = false; // Uncheck the hamburger input to close the menu
            }
        });
    });
});


//=======Slider
function scrollLeft(containerId) {
    var container = document.getElementById(containerId);
    console.log(`Scrolling left on container: ${containerId}`);
    container.scrollBy({
        left: - container.offsetWidth, // Scroll by the width of the container
        behavior: 'smooth'
    });
}

function scrollRight(containerId) {
    var container = document.getElementById(containerId);
    console.log(`Scrolling right on container: ${containerId}`);
    container.scrollBy({
        left: container.offsetWidth, // Scroll by the width of the container
        behavior: 'smooth'
    });
}



//==========Content Fade Effect==============//
document.addEventListener("DOMContentLoaded", function() {
    // Disable scrolling initially
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling after 2 seconds
    setTimeout(function() {
        document.body.style.overflow = 'auto';
    }, 0);

    // Intersection Observer for fade in/out effect
    const observerOptions = {
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.classList.remove('fade-out');
            } else {
                entry.target.classList.remove('fade-in');
                entry.target.classList.add('fade-out');
            }
        });
    }, observerOptions);

    // Target all sections that should have the fade effect
    const contentSections = document.querySelectorAll('.content');
    contentSections.forEach(section => {
        observer.observe(section);
    });
});


//=============================== Parallax ================================================//

document.addEventListener('DOMContentLoaded', function() {
    const parallaxSections = document.querySelectorAll('.parallax-section');
    let ticking = false;

    function handleScroll() {
        parallaxSections.forEach(section => {
            let scrolled = window.scrollY;
            let rate = section.getBoundingClientRect().top * -0.5; // Adjust the rate for desired effect
            section.style.backgroundPositionY = rate + 'px';
        });
        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(handleScroll);
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll);
});


//=============================== Word Effect ================================================//

// Array of words to cycle through
    const words = ['science', 'technology', 'humanity', 'innovators', 'dreamers', 'explorers'];

    // Get the element with the dynamic-word class
    const dynamicWordElement = document.querySelector('.dynamic-word');

    let index = 0;

    // Function to update the dynamic word
    function updateDynamicWord() {
        dynamicWordElement.textContent = words[index];
        index = (index + 1) % words.length; // Increment index and loop back to 0 when it reaches the end
    }

    // Call updateDynamicWord initially
    updateDynamicWord();

    // Set interval to change word every 0.6 seconds
    setInterval(updateDynamicWord, 600);


//================================Buttons================================================//

function scrollToContact() {
  var contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({
      behavior: 'smooth'
  });
}
// This is just a sample script. Paste your real code (javascript or HTML) here.

if ('this_is' == /an_example/) {
  of_beautifier();
} else {
  var a = b ? (c % d) : e[f];
}




