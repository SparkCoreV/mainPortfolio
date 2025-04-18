document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Active nav link based on scroll position
        const sections = document.querySelectorAll('section');
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Scroll animations
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('animated');
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on initial load
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For now, we'll just log it and show a success message
            console.log('Form submitted:', { name, email, message });
            
            // Reset form
            contactForm.reset();
            
            // Show success message (you could create a more sophisticated notification)
            alert('Thank you for your message! I will get back to you soon.');
        });
    }
    
    // Add animate-on-scroll class to elements
    document.querySelectorAll('.project-card, .skill-category').forEach(element => {
        element.classList.add('animate-on-scroll');
    });
    
    // Project hover effect
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('glow');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('glow');
        });
    });
    
    // Parallax effect
    const heroSection = document.querySelector('.hero-section');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (heroSection) {
            heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });
}); 


