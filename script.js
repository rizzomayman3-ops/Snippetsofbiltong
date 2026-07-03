// Smooth navigation clicks
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        const element = document.querySelector(target);
        
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Simple fade-in on load
window.addEventListener('load', () => {
    document.querySelectorAll('.feature-card, .product-card, .pricing-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animation = `fadeIn 0.6s ease-out ${index * 0.1}s forwards`;
    });
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Prevent button spam clicks
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        if (!this.href.startsWith('#')) {
            // External links - allow
            return;
        }
        e.preventDefault();
        
        const target = this.getAttribute('href');
        const element = document.querySelector(target);
        
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu interaction improvement
if (window.innerWidth < 768) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.style.minHeight = '44px';
        link.style.display = 'flex';
        link.style.alignItems = 'center';
    });
}

console.log('✓ Snippets Of Biltong website loaded');
