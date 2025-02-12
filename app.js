// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const extraOffset = 32; // Additional pixels of spacing
        const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight - extraOffset;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Menu toggle function
function toggleMenu(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    const hamburger = document.querySelector('.hamburger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}

document.addEventListener('DOMContentLoaded', () => {
    const nicheGrid = document.getElementById('nicheGrid');
    const colorScheme = document.getElementById('colorScheme');
    const colorSwatches = document.getElementById('colorSwatches');
    const findColorBtn = document.querySelector('.find-color-btn');
    const nicheSection = document.querySelector('.niche-selector');

    // Menu functionality
    const hamburger = document.querySelector('.hamburger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    function toggleMenu(e) {
        if (e) {
            e.preventDefault();
        }
        
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        body.style.overflow = '';
    }

    // Add click event to hamburger button
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', toggleMenu);

        // Close menu when clicking on mobile nav links
        const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Handle section scrolling
                const section = link.getAttribute('data-section');
                if (section) {
                    closeMenu();
                    setTimeout(() => {
                        scrollToSection(section);
                    }, 300); // Wait for menu close animation
                } else {
                    closeMenu();
                    if (link.getAttribute('href') === '#') {
                        scrollToTop();
                    }
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (mobileMenu.classList.contains('active') && 
                !mobileMenu.contains(e.target) && 
                !hamburger.contains(e.target)) {
                closeMenu();
            }
        });
    }

    // Add smooth scroll for Find My Color button
    if (findColorBtn && nicheSection) {
        findColorBtn.addEventListener('click', () => {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const extraOffset = 32; // Additional pixels of spacing
            const y = nicheSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight - extraOffset;
            
            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        });
    }

    // Create niche buttons
    niches.forEach(niche => {
        const button = document.createElement('button');
        button.className = 'niche-button';
        
        const icon = document.createElement('span');
        icon.className = 'niche-icon';
        icon.textContent = niche.icon;
        
        const text = document.createElement('span');
        text.className = 'niche-text';
        text.textContent = niche.name;
        
        button.appendChild(icon);
        button.appendChild(text);
        
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            document.querySelectorAll('.niche-button').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Update color schemes
            selectNiche(niche.name);
            
            // Smooth scroll to color schemes
            const colorSchemeSection = document.getElementById('colorScheme');
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const extraOffset = 32; // Additional pixels of spacing
            const targetPosition = colorSchemeSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight - extraOffset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
        
        nicheGrid.appendChild(button);
    });

    function selectNiche(nicheName) {
        const colorSchemeSection = document.getElementById('colorScheme');
        const colorSwatches = document.getElementById('colorSwatches');
        
        // Update the section title
        const sectionTitle = colorSchemeSection.querySelector('h2');
        sectionTitle.textContent = `Color Schemes for ${nicheName}`;
        
        // Clear existing swatches
        colorSwatches.innerHTML = '';
        
        // Get color schemes for the selected niche
        const schemes = colorSchemes[nicheName];
        
        // Create and append new scheme elements
        schemes.forEach(scheme => {
            const schemeElement = createSchemeElement(scheme);
            colorSwatches.appendChild(schemeElement);
        });
        
        // Scroll to color scheme section
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const extraOffset = 32; // Additional pixels of spacing
        const targetPosition = colorSchemeSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight - extraOffset;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Show the section
        colorSchemeSection.style.display = 'block';
        setTimeout(() => {
            colorSchemeSection.style.opacity = '1';
        }, 100);
    }

    function createSchemeElement(scheme) {
        const schemeContainer = document.createElement('div');
        schemeContainer.className = 'color-scheme-item';

        const nameElement = document.createElement('h3');
        nameElement.className = 'scheme-name';
        nameElement.textContent = scheme.name;

        const descriptionElement = document.createElement('p');
        descriptionElement.className = 'scheme-description';
        descriptionElement.textContent = scheme.description;

        const colorsContainer = document.createElement('div');
        colorsContainer.className = 'color-swatches';

        scheme.colors.forEach(color => {
            const swatch = document.createElement('div');
            swatch.className = 'color-swatch';
            swatch.style.backgroundColor = color;
            
            // Add color code display
            const colorCode = document.createElement('span');
            colorCode.className = 'color-code';
            colorCode.textContent = color;
            swatch.appendChild(colorCode);

            // Add click to copy functionality
            swatch.addEventListener('click', () => {
                navigator.clipboard.writeText(color);
                swatch.classList.add('copied');
                setTimeout(() => {
                    swatch.classList.remove('copied');
                }, 1000);
                showToast(`Copied ${color} to clipboard!`);
            });
            
            colorsContainer.appendChild(swatch);
        });

        schemeContainer.appendChild(nameElement);
        schemeContainer.appendChild(colorsContainer);
        schemeContainer.appendChild(descriptionElement);

        return schemeContainer;
    }

    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => {
                    document.body.removeChild(toast);
                }, 300);
            }, 2000);
        }, 100);
    }

    // FAQ Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current FAQ
            item.classList.toggle('active');
            
            // Accessibility
            question.setAttribute('aria-expanded', !isActive);
        });
    });
});
