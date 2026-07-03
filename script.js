// Smooth scroll behavior
gsap.registerPlugin();

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.to(entry.target, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out'
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.feature-card, .product-card, .pricing-card, .testimonial-card').forEach(el => {
    gsap.set(el, { opacity: 0, y: 30 });
    observer.observe(el);
});

// Floating seasoning animation
function createParticle() {
    const particles = document.querySelector('.hero-particles');
    if (!particles) return;

    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = 'rgba(243, 182, 201, 0.5)';
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = -10 + 'px';

    particles.appendChild(particle);

    gsap.to(particle, {
        y: window.innerHeight + 100,
        opacity: 0,
        duration: Math.random() * 3 + 4,
        ease: 'none',
        onComplete: () => particle.remove()
    });
}

setInterval(createParticle, 200);

// Hover effects on product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.05,
            duration: 0.3
        });
    });
    card.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3
        });
    });
});

// Scroll progress bar
const scrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight);
    
    // Add scroll indicator
    let progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.position = 'fixed';
        progressBar.style.top = '70px';
        progressBar.style.left = '0';
        progressBar.style.height = '3px';
        progressBar.style.background = 'linear-gradient(90deg, #F3B6C9, #F8D6E3)';
        progressBar.style.zIndex = '999';
        document.body.appendChild(progressBar);
    }
    progressBar.style.width = (scrolled * 100) + '%';
};

window.addEventListener('scroll', scrollProgress);

// Testimonials carousel animation
const testimonials = document.querySelectorAll('.testimonial-card');
let currentTestimonial = 0;

if (testimonials.length > 0) {
    gsap.set(testimonials, { opacity: 0 });
    gsap.set(testimonials[0], { opacity: 1 });
}

// Smooth nav link behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                scrollTo: target,
                duration: 1,
                ease: 'power2.inOut'
            });
        }
    });
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero');
    if (hero) {
        gsap.to(hero, {
            y: scrolled * 0.5,
            duration: 0,
        });
    }
});

// Add loading animation
window.addEventListener('load', () => {
    gsap.to('body', {
        opacity: 1,
        duration: 0.5
    });
});

// Counter animation for stats
function animateCounter(element, target, duration = 2) {
    gsap.to(element, {
        innerText: target,
        duration: duration,
        snap: { innerText: 1 },
        ease: 'power1.out'
    });
}

// Stagger animation for grid items
gridAnimations();

function gridAnimations() {
    const cards = document.querySelectorAll('.feature-card, .product-card, .pricing-card');
    gsap.set(cards, { opacity: 0, y: 20 });
    
    cards.forEach((card, index) => {
        observer.observe(card);
    });
}

// Mobile menu toggle
function handleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (window.innerWidth < 768) {
        navMenu.style.gap = '1rem';
    }
}

window.addEventListener('resize', handleMobileMenu);
handleMobileMenu();

console.log('Snippets Of Biltong website loaded successfully!');
