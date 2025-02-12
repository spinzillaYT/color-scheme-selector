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
        const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Menu toggle function
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    
    // Prevent scrolling when menu is open
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}

document.addEventListener('DOMContentLoaded', () => {
    const nicheGrid = document.getElementById('nicheGrid');
    const colorScheme = document.getElementById('colorScheme');
    const colorSwatches = document.getElementById('colorSwatches');
    const findColorBtn = document.querySelector('.find-color-btn');
    const nicheSection = document.querySelector('.niche-selector');

    // Add smooth scroll for Find My Color button
    if (findColorBtn && nicheSection) {
        findColorBtn.addEventListener('click', () => {
            const yOffset = -50; // Offset to account for any fixed headers
            const y = nicheSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            
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
            colorScheme.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
        
        nicheGrid.appendChild(button);
    });

    function selectNiche(nicheName) {
        // Get color schemes
        const schemes = colorSchemes[nicheName] || [];

        // Show color scheme section
        colorScheme.classList.add('visible');
        
        // Update section title
        const title = document.createElement('h2');
        title.textContent = `Color Schemes for ${nicheName}`;

        // Create schemes container
        const schemesContainer = document.createElement('div');
        schemesContainer.className = 'color-schemes-grid';

        // Create color schemes
        schemes.forEach(scheme => {
            const schemeElement = createSchemeElement(scheme);
            schemesContainer.appendChild(schemeElement);
        });

        // Clear previous content and add new
        colorScheme.innerHTML = '';
        colorScheme.appendChild(title);
        colorScheme.appendChild(schemesContainer);
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

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const mobileMenu = document.querySelector('.mobile-menu');
        const hamburger = document.querySelector('.hamburger-btn');
        
        if (mobileMenu.classList.contains('active') && 
            !e.target.closest('.mobile-menu') && 
            !e.target.closest('.hamburger-btn')) {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

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
