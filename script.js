// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const icon = btn.querySelector('i');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    if (menu.classList.contains('hidden')) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }
});

// Close mobile menu on link click
const mobileLinks = menu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Navbar background change on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('shadow-sm');
        navbar.classList.remove('bg-white/70');
        navbar.classList.add('bg-white/95');
    } else {
        navbar.classList.remove('shadow-sm');
        navbar.classList.add('bg-white/70');
        navbar.classList.remove('bg-white/95');
    }
});

// Scroll Reveal Animation (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px"
};

const revealOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});

// WhatsApp Form Submit
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('wa-name').value;
        const message = document.getElementById('wa-message').value;

        // Construct WhatsApp message
        const waText = `Hello Nikhil, my name is ${name}. %0A${message}`;

        // WhatsApp API URL (Using the provided number +91 7550697119)
        const waUrl = `https://wa.me/917550697119?text=${waText}`;

        // Open in new tab
        window.open(waUrl, '_blank');

        // Optional: clear form
        contactForm.reset();
    });
}
