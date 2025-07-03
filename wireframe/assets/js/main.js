/**
 * Createch XR - Main JavaScript
 * Handles loading animations, navigation, forms, and interactive elements
 */

class CreatechXR {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeAnimations();
        this.setupNavigation();
        this.setupLoadingScreen();
        this.setupScrollEffects();
        this.setupFormHandling();
        this.setupInteractiveElements();
    }

    setupEventListeners() {
        document.addEventListener('DOMContentLoaded', () => {
            console.log('Createch XR initialized');
            this.setupMobileMenu();
            this.animateOnLoad();
        });

        window.addEventListener('load', () => {
            this.hideLoadingScreen();
        });

        window.addEventListener('scroll', () => {
            this.onScroll();
        });

        window.addEventListener('resize', () => {
            this.onResize();
        });
    }

    onDOMContentLoaded() {
        console.log('Createch XR initialized');
        this.setupMobileMenu();
        this.animateOnLoad();
    }

    onWindowLoad() {
        this.hideLoadingScreen();
    }

    onScroll() {
        this.updateNavbar();
        this.updateScrollProgress();
        this.animateOnScroll();
    }

    onResize() {
        this.updateMobileMenu();
    }

    // Loading Screen
    setupLoadingScreen() {
        const loadingContainer = document.querySelector('.loading-container');
        if (!loadingContainer) return;

        const progressText = document.querySelector('.loading-progress');
        const progressBar = document.querySelector('.progress-bar');
        
        let progress = 0;
        const updateProgress = () => {
            progress += 2;
            if (progress > 100) progress = 100;

            if (progressText) {
                progressText.textContent = progress + '%';
            }

            if (progressBar) {
                progressBar.style.width = progress + '%';
            }

            if (progress < 100) {
                setTimeout(updateProgress, 50);
            }
        };

        updateProgress();
    }

    hideLoadingScreen() {
        const loadingContainer = document.querySelector('.loading-container');
        if (loadingContainer) {
            setTimeout(() => {
                loadingContainer.style.opacity = '0';
                setTimeout(() => {
                    loadingContainer.style.display = 'none';
                }, 500);
            }, 500);
        }
    }

    // Navigation
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-links a');
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            }

            link.addEventListener('click', (e) => {
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                link.classList.add('active');
            });
        });

        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navLinksMobile = document.querySelector('.nav-links');

        if (mobileToggle && navLinksMobile) {
            mobileToggle.addEventListener('click', () => {
                navLinksMobile.classList.toggle('mobile-open');
                mobileToggle.innerHTML = navLinksMobile.classList.contains('mobile-open') ? '✕' : '☰';
            });
        }
    }

    setupMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        if (mobileToggle && navLinks) {
            mobileToggle.addEventListener('click', () => {
                navLinks.classList.toggle('mobile-open');
                
                // Update toggle icon
                if (navLinks.classList.contains('mobile-open')) {
                    mobileToggle.innerHTML = '✕';
                } else {
                    mobileToggle.innerHTML = '☰';
                }
            });

            // Close mobile menu when clicking on a link
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('mobile-open');
                    mobileToggle.innerHTML = '☰';
                });
            });
        }
    }

    updateMobileMenu() {
        const navLinks = document.querySelector('.nav-links');
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        
        if (window.innerWidth > 768) {
            if (navLinks) navLinks.classList.remove('mobile-open');
            if (mobileToggle) mobileToggle.innerHTML = '☰';
        }
    }

    updateNavbar() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(42, 42, 42, 0.95)';
            } else {
                navbar.style.background = 'rgba(42, 42, 42, 0.9)';
            }
        }
    }

    // Scroll Effects
    setupScrollEffects() {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all cards and sections
        const animatedElements = document.querySelectorAll('.pixel-card, .profile-card, .section');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    updateScrollProgress() {
        const progressBar = document.querySelector('.scroll-progress .progress-bar');
        if (progressBar) {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        }
    }

    animateOnScroll() {
        // Parallax effect for hero section
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            const scrollY = window.pageYOffset;
            heroSection.style.transform = `translateY(${scrollY * 0.5}px)`;
        }
    }

    animateOnLoad() {
        // Animate hero title with typewriter effect
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle && heroTitle.classList.contains('typewriter-effect')) {
            setTimeout(() => {
                heroTitle.style.animation = 'typing 3s steps(40, end), blink-caret 0.75s step-end infinite';
            }, 1000);
        }
    }

    // Form Handling
    setupFormHandling() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission(form);
            });
        });

        // Add floating labels effect
        const inputs = document.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });

            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });

            // Check if input has value on load
            if (input.value) {
                input.parentElement.classList.add('focused');
            }
        });
    }

    handleFormSubmission(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'SENDING...';
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;

            // Show success message
            this.showNotification('Message sent successfully!', 'success');
            
            // Reset form
            form.reset();
            
            // Remove focused class from form groups
            form.querySelectorAll('.form-group').forEach(group => {
                group.classList.remove('focused');
            });

            console.log('Form submitted:', data);
        }, 2000);
    }

    // Interactive Elements
    setupInteractiveElements() {
        // Button click effects
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.createRippleEffect(e, btn);
            });
        });

        // Card hover effects
        document.querySelectorAll('.pixel-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px) scale(1.02)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Icon animations
        document.querySelectorAll('.pixel-icon').forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                icon.style.animation = 'float 1s ease-in-out infinite';
            });

            icon.addEventListener('mouseleave', () => {
                icon.style.animation = '';
            });
        });
    }

    createRippleEffect(e, element) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;

        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Animations
    initializeAnimations() {
        // Add ripple animation keyframes
        if (!document.querySelector('#ripple-animation')) {
            const style = document.createElement('style');
            style.id = 'ripple-animation';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Utility Methods
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#4ade80' : '#e6b3ff'};
            color: #1a1a1a;
            padding: 1rem 2rem;
            border-radius: 0;
            font-weight: bold;
            text-transform: uppercase;
            z-index: 10000;
            animation: slideInRight 0.3s ease;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Portfolio filtering (for portfolio page)
    setupPortfolioFiltering() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');

        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;

                // Update active button
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Filter items
                portfolioItems.forEach(item => {
                    if (filter === 'all' || item.dataset.category === filter) {
                        item.style.display = 'block';
                        item.style.animation = 'fadeInUp 0.5s ease';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Modal functionality
    setupModals() {
        const modalTriggers = document.querySelectorAll('[data-modal]');
        const modals = document.querySelectorAll('.modal');
        const modalCloses = document.querySelectorAll('.modal-close');

        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const modalId = trigger.dataset.modal;
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        modalCloses.forEach(close => {
            close.addEventListener('click', () => {
                const modal = close.closest('.modal');
                if (modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });

        // Close modal on backdrop click
        modals.forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });

        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const activeModal = document.querySelector('.modal.active');
                if (activeModal) {
                    activeModal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    }
}

// Initialize the application
const app = new CreatechXR();

// Additional animations style
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    .modal.active {
        opacity: 1;
        visibility: visible;
    }

    .modal-content {
        background: var(--bg-surface);
        border: 2px solid var(--accent);
        padding: 2rem;
        max-width: 90vw;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
    }

    .modal-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        color: var(--accent);
        font-size: 1.5rem;
        cursor: pointer;
    }
`;
document.head.appendChild(additionalStyles); 