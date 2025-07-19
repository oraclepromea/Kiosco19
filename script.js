// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

// Simple smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Simple offset calculation
            const headerHeight = 80; // Fixed header height
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Simple header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Simple fade-in animation on scroll
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.menu-item, .highlight-card, .beverage-item');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            if (!name || !email || !message) {
                showNotification('Por favor completa todos los campos requeridos.', 'error');
                return;
            }
            
            showNotification('¡Gracias por tu mensaje! Te contactaremos pronto.', 'success');
            contactForm.reset();
        });
    }
});

// Simple notification function
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 350px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    if (type === 'success') {
        notification.style.background = '#48bb78';
    } else {
        notification.style.background = '#e53e3e';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// WhatsApp contact
function initWhatsAppContact() {
    const phoneNumber = '59175866254';
    const whatsappButtons = document.querySelectorAll('[data-whatsapp]');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const message = encodeURIComponent('Hola! Me interesa hacer una reserva en Kiosco #19. ¿Podrían ayudarme?');
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(whatsappUrl, '_blank');
        });
    });
}

// Initialize WhatsApp contact
document.addEventListener('DOMContentLoaded', initWhatsAppContact);

// Add floating WhatsApp button
document.addEventListener('DOMContentLoaded', function() {
    const floatingButton = document.createElement('div');
    floatingButton.innerHTML = '<i class="fab fa-whatsapp"></i>';
    floatingButton.className = 'floating-whatsapp';
    floatingButton.setAttribute('data-whatsapp', 'true');
    
    floatingButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 60px;
        height: 60px;
        background: #25d366;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    // Add simple styles
    const style = document.createElement('style');
    style.textContent = `
        .floating-whatsapp:hover {
            transform: scale(1.1);
        }
        
        .header.scrolled {
            background: rgba(255, 255, 255, 0.98) !important;
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1) !important;
        }
        
        .nav-menu.active {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 1rem 0;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
        
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(floatingButton);
    
    initWhatsAppContact();
});

// Language Translation System
const translations = {
    es: {
        // Navigation
        'nav-home': 'Inicio',
        'nav-menu': 'Menú',
        'nav-location': 'Ubicación',
        'nav-contact': 'Contacto',
        
        // Hero Section
        'hero-subtitle': 'Sabores Auténticos Frente al Sagrado Lago Titicaca',
        'hero-description': 'Disfruta de la mejor trucha fresca y platos tradicionales bolivianos en un ambiente único con vista panorámica al lago más alto del mundo.',
        'hero-btn-menu': 'Ver Menú',
        'hero-btn-location': 'Cómo Llegar',
        
        // Hero Features
        'feature-fish': 'Trucha Fresca del Lago',
        'feature-view': 'Vista al Lago Titicaca',
        'feature-traditional': 'Cocina Tradicional',
        
        // Highlights
        'highlight-location-title': 'Ubicación Privilegiada',
        'highlight-location-desc': 'Directamente en la orilla del Lago Titicaca, con las mejores vistas de Copacabana',
        'highlight-fish-title': 'Trucha Fresca',
        'highlight-fish-desc': 'Pescado fresco del lago, preparado al momento con recetas tradicionales',
        'highlight-hours-title': 'Horarios Amplios',
        'highlight-hours-desc': 'Abierto todos los días de 9:00 AM a 10:00 PM para tu comodidad',
        
        // Menu Section
        'menu-title': 'Nuestro Menú',
        'menu-subtitle': 'Sabores auténticos de Bolivia con la frescura del Lago Titicaca',
        'main-dishes': 'Platos Principales',
        'beverages': 'Bebidas',
        'family-sodas': 'Gaseosas Familiares',
        'beers': 'Cervezas',
        'individual-drinks': 'Bebidas Individuales',
        
        // Location Section
        'location-title': 'Nuestra Ubicación',
        'location-lake-title': 'Frente al Sagrado Lago Titicaca',
        'location-description': 'Nos encontramos en la hermosa Av. Costanera de Copacabana, directamente frente al lago más alto del mundo. Disfruta de vistas espectaculares mientras saboreas nuestros platos.',
        'location-address': 'Av. Costanera, Copacabana, Bolivia',
        'location-hours': 'Lunes a Domingo: 9:00 AM - 10:00 PM',
        'location-wifi': 'WiFi gratuito disponible',
        'why-visit': '¿Por qué visitarnos?',
        'open-maps': 'Abrir en Google Maps',
        
        // Contact Section
        'contact-title': 'Contáctanos',
        'contact-reservations': 'Reservas y Consultas',
        'contact-description': 'Estamos aquí para hacer de tu visita una experiencia memorable. No dudes en contactarnos para reservas o cualquier consulta.',
        'contact-phone': 'Teléfono',
        'contact-address': 'Dirección',
        'contact-hours': 'Horarios',
        'visit-today': 'Visítanos Hoy',
        'visit-description': 'Estamos ubicados en el mejor lugar de Copacabana con vista privilegiada al Lago Titicaca. ¡Te esperamos!',
        'specialties': 'Especialidades',
        'contact-now': 'Contáctanos Ahora',
        'call-now': 'Llamar Ahora',
        'view-location': 'Ver Ubicación',
        
        // Footer
        'footer-hours': 'Horarios',
        'footer-contact': 'Contacto',
        'footer-specialties': 'Especialidades',
        'footer-description': 'El mejor restaurante frente al Lago Titicaca en Copacabana, Bolivia. Sabores auténticos con vistas incomparables.',
        'footer-hours-text': 'Lunes a Domingo<br>9:00 AM - 10:00 PM',
        'footer-contact-text': 'Teléfono: 75866254<br>Av. Costanera, Copacabana',
        'footer-specialties-text': 'Trucha Fresca del Lago<br>Cocina Tradicional Boliviana',
        'footer-copyright': '© 2025 Kiosco #19 Copacabana. Todos los derechos reservados.'
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-menu': 'Menu',
        'nav-location': 'Location',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-subtitle': 'Authentic Flavors Facing Sacred Lake Titicaca',
        'hero-description': 'Enjoy the finest fresh trout and traditional Bolivian dishes in a unique setting with panoramic views of the world\'s highest lake.',
        'hero-btn-menu': 'View Menu',
        'hero-btn-location': 'How to Get Here',
        
        // Hero Features
        'feature-fish': 'Fresh Lake Trout',
        'feature-view': 'Lake Titicaca View',
        'feature-traditional': 'Traditional Cuisine',
        
        // Highlights
        'highlight-location-title': 'Prime Location',
        'highlight-location-desc': 'Directly on the shores of Lake Titicaca, with the best views of Copacabana',
        'highlight-fish-title': 'Fresh Trout',
        'highlight-fish-desc': 'Fresh fish from the lake, prepared to order with traditional recipes',
        'highlight-hours-title': 'Extended Hours',
        'highlight-hours-desc': 'Open every day from 9:00 AM to 10:00 PM for your convenience',
        
        // Menu Section
        'menu-title': 'Our Menu',
        'menu-subtitle': 'Authentic flavors of Bolivia with the freshness of Lake Titicaca',
        'main-dishes': 'Main Dishes',
        'beverages': 'Beverages',
        'family-sodas': 'Family Size Sodas',
        'beers': 'Beers',
        'individual-drinks': 'Individual Drinks',
        
        // Location Section
        'location-title': 'Our Location',
        'location-lake-title': 'Facing Sacred Lake Titicaca',
        'location-description': 'We are located on the beautiful Av. Costanera in Copacabana, directly facing the world\'s highest lake. Enjoy spectacular views while savoring our dishes.',
        'location-address': 'Av. Costanera, Copacabana, Bolivia',
        'location-hours': 'Monday to Sunday: 9:00 AM - 10:00 PM',
        'location-wifi': 'Free WiFi available',
        'why-visit': 'Why visit us?',
        'open-maps': 'Open in Google Maps',
        
        // Contact Section
        'contact-title': 'Contact Us',
        'contact-reservations': 'Reservations & Inquiries',
        'contact-description': 'We are here to make your visit a memorable experience. Feel free to contact us for reservations or any questions.',
        'contact-phone': 'Phone',
        'contact-address': 'Address',
        'contact-hours': 'Hours',
        'visit-today': 'Visit Us Today',
        'visit-description': 'We are located in the best spot in Copacabana with privileged views of Lake Titicaca. We\'re waiting for you!',
        'specialties': 'Specialties',
        'contact-now': 'Contact Us Now',
        'call-now': 'Call Now',
        'view-location': 'View Location',
        
        // Footer
        'footer-hours': 'Hours',
        'footer-contact': 'Contact',
        'footer-specialties': 'Specialties',
        'footer-description': 'The best restaurant facing Lake Titicaca in Copacabana, Bolivia. Authentic flavors with incomparable views.',
        'footer-hours-text': 'Monday to Sunday<br>9:00 AM - 10:00 PM',
        'footer-contact-text': 'Phone: 75866254<br>Av. Costanera, Copacabana',
        'footer-specialties-text': 'Fresh Lake Trout<br>Traditional Bolivian Cuisine',
        'footer-copyright': '© 2025 Kiosco #19 Copacabana. All rights reserved.'
    }
};

// Language toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = 'es'; // Default to Spanish
    
    // Initialize language
    initLanguage();
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            if (selectedLang !== currentLang) {
                switchLanguage(selectedLang);
            }
        });
    });
    
    function initLanguage() {
        // Set default language to English
        switchLanguage('en');
    }
    
    function switchLanguage(lang) {
        currentLang = lang;
        
        // Update active button
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
        
        // Update document language
        document.documentElement.lang = lang;
        
        // Update page title
        const titles = {
            es: 'Kiosco #19 - Restaurante Frente al Lago | Copacabana, Bolivia',
            en: 'Kiosco #19 - Lakefront Restaurant | Copacabana, Bolivia'
        };
        document.title = titles[lang];
        
        // Translate all elements with data-translate attributes
        const elementsToTranslate = document.querySelectorAll('[data-translate]');
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Update specific content that doesn't have data-translate
        updateSpecificContent(lang);
    }
    
    function updateSpecificContent(lang) {
        // Update hero section
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroDescription = document.querySelector('.hero-description');
        const heroBtnMenu = document.querySelector('.hero-buttons .btn-primary');
        const heroBtnLocation = document.querySelector('.hero-buttons .btn-secondary');
        
        if (heroSubtitle) heroSubtitle.textContent = translations[lang]['hero-subtitle'];
        if (heroDescription) heroDescription.textContent = translations[lang]['hero-description'];
        if (heroBtnMenu) heroBtnMenu.textContent = translations[lang]['hero-btn-menu'];
        if (heroBtnLocation) heroBtnLocation.textContent = translations[lang]['hero-btn-location'];
        
        // Update hero features
        const features = document.querySelectorAll('.feature span');
        const featureKeys = ['feature-fish', 'feature-view', 'feature-traditional'];
        features.forEach((feature, index) => {
            if (featureKeys[index] && translations[lang][featureKeys[index]]) {
                feature.textContent = translations[lang][featureKeys[index]];
            }
        });
        
        // Update highlights
        const highlightTitles = document.querySelectorAll('.highlight-card h3');
        const highlightDescs = document.querySelectorAll('.highlight-card p');
        const highlightKeys = [
            ['highlight-location-title', 'highlight-location-desc'],
            ['highlight-fish-title', 'highlight-fish-desc'],
            ['highlight-hours-title', 'highlight-hours-desc']
        ];
        
        highlightTitles.forEach((title, index) => {
            if (highlightKeys[index] && translations[lang][highlightKeys[index][0]]) {
                title.textContent = translations[lang][highlightKeys[index][0]];
            }
        });
        
        highlightDescs.forEach((desc, index) => {
            if (highlightKeys[index] && translations[lang][highlightKeys[index][1]]) {
                desc.textContent = translations[lang][highlightKeys[index][1]];
            }
        });
        
        // Update section titles
        const menuTitle = document.querySelector('.menu-section .section-title');
        const menuSubtitle = document.querySelector('.menu-section .section-subtitle');
        const locationTitle = document.querySelector('.location-section .section-title');
        const contactTitle = document.querySelector('.contact-section .section-title');
        
        if (menuTitle) menuTitle.textContent = translations[lang]['menu-title'];
        if (menuSubtitle) menuSubtitle.textContent = translations[lang]['menu-subtitle'];
        if (locationTitle) locationTitle.textContent = translations[lang]['location-title'];
        if (contactTitle) contactTitle.textContent = translations[lang]['contact-title'];
        
        // Update category titles
        const mainDishesTitle = document.querySelector('.category-title');
        const beveragesTitle = document.querySelectorAll('.category-title')[1];
        
        if (mainDishesTitle) mainDishesTitle.innerHTML = `<i class="fas fa-utensils"></i>${translations[lang]['main-dishes']}`;
        if (beveragesTitle) beveragesTitle.innerHTML = `<i class="fas fa-glass-cheers"></i>${translations[lang]['beverages']}`;
        
        // Update beverage subtitles
        const beverageSubtitles = document.querySelectorAll('.beverage-subtitle');
        const beverageKeys = ['family-sodas', 'beers', 'individual-drinks'];
        beverageSubtitles.forEach((subtitle, index) => {
            if (beverageKeys[index] && translations[lang][beverageKeys[index]]) {
                subtitle.textContent = translations[lang][beverageKeys[index]];
            }
        });
        
        // Update location section
        const locationSubtitle = document.querySelector('.location-info h3');
        const locationDesc = document.querySelector('.location-info > p');
        
        if (locationSubtitle) locationSubtitle.textContent = translations[lang]['location-lake-title'];
        if (locationDesc) locationDesc.textContent = translations[lang]['location-description'];
        
        // Update location details
        const locationDetails = document.querySelectorAll('.detail span');
        const detailTexts = [
            translations[lang]['location-address'],
            translations[lang]['location-hours'],
            '75866254',
            translations[lang]['location-wifi']
        ];
        
        locationDetails.forEach((detail, index) => {
            if (detailTexts[index]) {
                detail.textContent = detailTexts[index];
            }
        });
        
        // Update "Why visit us" section
        const whyVisit = document.querySelector('.location-features h4');
        if (whyVisit) whyVisit.textContent = translations[lang]['why-visit'];
        
        // Update location features list
        const locationFeatures = document.querySelectorAll('.location-features li');
        const featureTexts = {
            es: [
                'Vista panorámica al Lago Titicaca',
                'Ambiente familiar y acogedor',
                'Terraza frente al lago',
                'Fácil acceso desde el centro de Copacabana',
                'Estacionamiento disponible',
                'Ideal para turistas y locales'
            ],
            en: [
                'Panoramic view of Lake Titicaca',
                'Cozy family atmosphere',
                'Lakefront terrace',
                'Easy access from downtown Copacabana',
                'Parking available',
                'Perfect for tourists and locals'
            ]
        };
        
        locationFeatures.forEach((feature, index) => {
            if (featureTexts[lang] && featureTexts[lang][index]) {
                feature.textContent = featureTexts[lang][index];
            }
        });
        
        // Update map link
        const mapLink = document.querySelector('.map-link');
        if (mapLink) {
            mapLink.innerHTML = `<i class="fas fa-external-link-alt"></i>${translations[lang]['open-maps']}`;
        }
        
        // Update contact section
        const contactSubtitle = document.querySelector('.contact-info h3');
        const contactDesc = document.querySelector('.contact-info > p');
        
        if (contactSubtitle) contactSubtitle.textContent = translations[lang]['contact-reservations'];
        if (contactDesc) contactDesc.textContent = translations[lang]['contact-description'];
        
        // Update contact methods
        const contactMethodLabels = document.querySelectorAll('.contact-method div span');
        const contactLabels = [translations[lang]['contact-phone'], translations[lang]['contact-address'], translations[lang]['contact-hours']];
        
        contactMethodLabels.forEach((label, index) => {
            if (contactLabels[index]) {
                label.textContent = contactLabels[index];
            }
        });
        
        // Update contact highlights
        const visitTitle = document.querySelector('.contact-highlights h3');
        const visitDesc = document.querySelector('.contact-highlights > p');
        const specialtiesTitle = document.querySelector('.contact-card h4');
        const contactNowTitle = document.querySelector('.quick-actions h4');
        
        if (visitTitle) visitTitle.textContent = translations[lang]['visit-today'];
        if (visitDesc) visitDesc.textContent = translations[lang]['visit-description'];
        if (specialtiesTitle) specialtiesTitle.textContent = translations[lang]['specialties'];
        if (contactNowTitle) contactNowTitle.textContent = translations[lang]['contact-now'];
        
        // Update specialties list
        const specialtiesList = document.querySelectorAll('.contact-card li');
        const specialtyTexts = {
            es: [
                'Trucha fresca del Lago Titicaca',
                'Pique Macho tradicional',
                'Platos bolivianos auténticos',
                'Vista panorámica al lago'
            ],
            en: [
                'Fresh trout from Lake Titicaca',
                'Traditional Pique Macho',
                'Authentic Bolivian dishes',
                'Panoramic lake view'
            ]
        };
        
        specialtiesList.forEach((item, index) => {
            if (specialtyTexts[lang] && specialtyTexts[lang][index]) {
                item.textContent = specialtyTexts[lang][index];
            }
        });
        
        // Update action buttons
        const actionButtons = document.querySelectorAll('.action-btn span');
        const buttonTexts = [translations[lang]['call-now'], 'WhatsApp', translations[lang]['view-location']];
        
        actionButtons.forEach((button, index) => {
            if (buttonTexts[index]) {
                button.textContent = buttonTexts[index];
            }
        });
        
        // Update footer
        const footerTitles = document.querySelectorAll('.footer-section h4');
        const footerTexts = document.querySelectorAll('.footer-section p');
        const footerDescription = document.querySelector('.footer-section p');
        const footerCopyright = document.querySelector('.footer-bottom p');
        
        if (footerDescription) footerDescription.textContent = translations[lang]['footer-description'];
        if (footerCopyright) footerCopyright.textContent = translations[lang]['footer-copyright'];
        
        if (footerTitles.length >= 3) {
            footerTitles[0].textContent = translations[lang]['footer-hours'];
            footerTitles[1].textContent = translations[lang]['footer-contact'];
            footerTitles[2].textContent = translations[lang]['footer-specialties'];
        }
        
        if (footerTexts.length >= 4) {
            footerTexts[1].innerHTML = translations[lang]['footer-hours-text'];
            footerTexts[2].innerHTML = translations[lang]['footer-contact-text'];
            footerTexts[3].innerHTML = translations[lang]['footer-specialties-text'];
        }
    }
});