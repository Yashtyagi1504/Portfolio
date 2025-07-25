// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Scroll Animation
const scrollElements = document.querySelectorAll('.scroll-animation');

const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    const elementHeight = el.getBoundingClientRect().height;
    const windowHeight = window.innerHeight;
    
    return (
        elementTop <= windowHeight * (percentageScroll / 100) &&
        elementTop + elementHeight > 0
    );
};

const displayScrollElement = element => {
    element.classList.add('scrolled');
};

const hideScrollElement = element => {
    element.classList.remove('scrolled');
};

const handleScrollAnimation = () => {
    scrollElements.forEach(el => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

// Add scroll event listener
window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        // For this example, we'll just log it and show a success message
        console.log('Form submitted:', { name, email, subject, message });
        
        // Show success message (in a real application, you'd do this after successful AJAX call)
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Header scroll effect
const header = document.querySelector('header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
    
    lastScrollY = window.scrollY;
});

// Add CSS class for header scroll effect
const style = document.createElement('style');
style.innerHTML = `
    .header-hidden {
        transform: translateY(-100%);
    }
`;
document.head.appendChild(style);