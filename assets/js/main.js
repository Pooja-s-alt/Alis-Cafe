/**
 * ALI'S CAFE - MAIN INTERACTIVE JAVASCRIPT ENGINE
 * Handles header scrolling, mobile navigation, category filtering,
 * animated counters, gallery lightbox, FAQ accordion, live status, and form validation.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Render dynamic elements from config (including Admin Panel overrides)
  renderDynamicContentFromConfig();

  // Initialize all core engine modules
  initHeaderScroll();
  initMobileMenu();
  initAnimatedCounters();
  initMenuFiltering();
  initGalleryLightbox();
  initFaqAccordion();
  initLiveOpeningStatus();
  initContactForm();
  initWhatsAppFloating();
});

/* --------------------------------------------------------------------------
   0. DYNAMIC CONFIG CONTENT RENDERER (RESPONDS TO ADMIN PANEL & CONFIG)
   -------------------------------------------------------------------------- */
function renderDynamicContentFromConfig() {
  const cfg = window.ALIS_CAFE_CONFIG || (typeof CAFE_CONFIG !== 'undefined' ? CAFE_CONFIG : null);
  if (!cfg) return;

  // 1. Hero Banner & Logos
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle && cfg.hero?.headline) heroTitle.innerHTML = cfg.hero.headline;

  const heroBadge = document.querySelector('.hero-badge-text');
  if (heroBadge && cfg.hero?.badge) heroBadge.textContent = cfg.hero.badge;

  const heroSubtext = document.querySelector('.hero-subtitle');
  if (heroSubtext && cfg.hero?.subtext) heroSubtext.textContent = cfg.hero.subtext;

  const heroBg = document.querySelector('.hero-bg-img img');
  if (heroBg) {
    if (cfg.heroImages && cfg.heroImages.length) heroBg.src = cfg.heroImages[0];
    else if (cfg.hero?.bgImage) heroBg.src = cfg.hero.bgImage;
  }

  const logos = document.querySelectorAll('.logo-img, .footer-logo-img');
  if (logos.length && cfg.brand?.logoImage) logos.forEach(l => l.src = cfg.brand.logoImage);

  // About & Story Section Images
  const aboutImg = document.querySelector('.about-img-wrapper img');
  if (aboutImg) {
    if (cfg.aboutImages && cfg.aboutImages.length) aboutImg.src = cfg.aboutImages[0];
    else if (cfg.about?.image) aboutImg.src = cfg.about.image;
  }

  const storyImg = document.querySelector('.story-img-wrapper img');
  if (storyImg) {
    if (cfg.storyImages && cfg.storyImages.length) storyImg.src = cfg.storyImages[0];
    else if (cfg.story?.image) storyImg.src = cfg.story.image;
  }

  // 2. Stats Counters
  if (cfg.achievements && cfg.achievements.length >= 4) {
    const statElements = document.querySelectorAll('.stat-number');
    if (statElements.length >= 4) {
      statElements[0].setAttribute('data-target', cfg.achievements[0].value);
      statElements[1].setAttribute('data-target', cfg.achievements[1].value);
      statElements[2].setAttribute('data-target', cfg.achievements[2].value);
      statElements[3].setAttribute('data-target', cfg.achievements[3].value);
    }
  }

  // 3. Featured Specials Section
  if (cfg.featuredSpecials && cfg.featuredSpecials.length) {
    const specialsGrid = document.querySelector('.specials-grid');
    if (specialsGrid) {
      specialsGrid.innerHTML = cfg.featuredSpecials.map(s => `
        <div class="special-card">
          <div class="special-img-wrapper">
            <span class="special-tag">${s.tag || 'Chef Special'}</span>
            <img src="${s.image}" alt="${s.name} at Ali’s Cafe" loading="lazy">
          </div>
          <div class="special-body">
            <h3 class="special-title">${s.name}</h3>
            <p class="special-desc">${s.description}</p>
            <div class="special-footer" style="justify-content: flex-end;">
              <a href="https://wa.me/919159092589?text=Hi%20Ali’s%20Cafe%20Ramnad,%20I’d%20like%20to%20order%20the%20${encodeURIComponent(s.name)}." target="_blank" rel="noopener" class="btn btn-outline special-order-btn" style="padding: 0.5rem 1.2rem; font-size: 0.85rem;">Order on WhatsApp ➔</a>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  // 4. Menu Items Section
  if (cfg.menuItems && cfg.menuItems.length) {
    const menuGrid = document.querySelector('.menu-grid');
    if (menuGrid) {
      menuGrid.innerHTML = cfg.menuItems.map(item => `
        <div class="menu-card" data-category="${item.category}">
          <div class="menu-item-img">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
          </div>
          <div class="menu-item-details">
            <div class="menu-item-header">
              <span class="menu-item-title">${item.name}</span>
              ${item.tag ? `<span class="menu-item-tag">${item.tag}</span>` : ''}
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  // 5. Gallery Section
  if (cfg.galleryImages && cfg.galleryImages.length) {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (galleryGrid) {
      galleryGrid.innerHTML = cfg.galleryImages.map(img => `
        <div class="gallery-item" data-category="${img.category}">
          <img src="${img.src}" alt="${img.title}" loading="lazy">
          <div class="gallery-overlay">
            <span class="gallery-category">${img.category}</span>
            <h3 class="gallery-title">${img.title}</h3>
          </div>
        </div>
      `).join('');
    }
  }

  // 6. Testimonials Section
  if (cfg.testimonials && cfg.testimonials.length) {
    const testGrid = document.querySelector('.testimonials-grid');
    if (testGrid) {
      testGrid.innerHTML = cfg.testimonials.map(t => `
        <div class="testimonial-card">
          <div class="testimonial-stars">★★★★★</div>
          <p class="testimonial-quote">“${t.quote}”</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">${t.avatar || t.name.charAt(0)}</div>
            <div>
              <div class="author-name">${t.name} <span class="verified-badge">✓ Verified Guest</span></div>
              <div class="author-role">${t.role}</div>
            </div>
          </div>
        </div>
      `).join('');
    }
  }
}

/* --------------------------------------------------------------------------
   1. STICKY HEADER SCROLL EFFECT
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

/* --------------------------------------------------------------------------
   2. MOBILE NAVIGATION HAMBURGER MENU
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!hamburger || !navMenu) return;

  const toggleMenu = () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  };

  hamburger.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. ANIMATED STATISTICAL COUNTERS
   -------------------------------------------------------------------------- */
function initAnimatedCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  const animate = (el) => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    if (isNaN(target)) return;

    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current).toLocaleString();
      }
    }, stepTime);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  statNumbers.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   4. MENU CATEGORY FILTERING
   -------------------------------------------------------------------------- */
function initMenuFiltering() {
  const tabs = document.querySelectorAll('.menu-tab');
  const cards = document.querySelectorAll('.menu-card');

  if (!tabs.length || !cards.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const category = tab.getAttribute('data-category');

      cards.forEach(card => {
        const itemCategory = card.getAttribute('data-category');
        if (category === 'all' || itemCategory === category) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. GALLERY MASONRY FILTERING & LIGHTBOX MODAL
   -------------------------------------------------------------------------- */
let currentGalleryIndex = 0;
let visibleGalleryItems = [];

function initGalleryLightbox() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.querySelector('.lightbox-close');
  const prevBtn = document.querySelector('.lightbox-prev');
  const nextBtn = document.querySelector('.lightbox-next');

  if (!lightbox || !galleryItems.length) return;

  // Filter items
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (cat === 'All' || itemCat === cat) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
      updateVisibleItems();
    });
  });

  const updateVisibleItems = () => {
    visibleGalleryItems = Array.from(galleryItems).filter(item => item.style.display !== 'none');
  };
  updateVisibleItems();

  // Open Lightbox
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      updateVisibleItems();
      currentGalleryIndex = visibleGalleryItems.indexOf(item);
      showLightboxImage(currentGalleryIndex);
      lightbox.classList.add('active');
    });
  });

  const showLightboxImage = (index) => {
    if (index < 0 || index >= visibleGalleryItems.length) return;
    const targetItem = visibleGalleryItems[index];
    const img = targetItem.querySelector('img');
    const title = targetItem.querySelector('.gallery-title');

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || 'Gallery image';
    lightboxCaption.textContent = title ? title.textContent : '';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('active');
  };

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => {
    currentGalleryIndex = (currentGalleryIndex - 1 + visibleGalleryItems.length) % visibleGalleryItems.length;
    showLightboxImage(currentGalleryIndex);
  });
  if (nextBtn) nextBtn.addEventListener('click', () => {
    currentGalleryIndex = (currentGalleryIndex + 1) % visibleGalleryItems.length;
    showLightboxImage(currentGalleryIndex);
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft' && prevBtn) prevBtn.click();
    if (e.key === 'ArrowRight' && nextBtn) nextBtn.click();
  });
}

/* --------------------------------------------------------------------------
   6. FAQ ACCORDION HANDLER
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-button');
    const content = item.querySelector('.faq-content');

    if (!btn || !content) return;

    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close other open accordions
      faqItems.forEach(other => {
        if (other !== item && other.classList.contains('active')) {
          other.classList.remove('active');
          const otherContent = other.querySelector('.faq-content');
          if (otherContent) otherContent.style.maxHeight = '0';
        }
      });

      if (isActive) {
        item.classList.remove('active');
        content.style.maxHeight = '0';
      } else {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   7. LIVE OPENING HOURS STATUS CALCULATOR
   -------------------------------------------------------------------------- */
function initLiveOpeningStatus() {
  const badge = document.getElementById('live-status-badge');
  if (!badge) return;

  const now = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayIndex = now.getDay();
  const currentDay = days[dayIndex];
  
  const hour = now.getHours();
  const min = now.getMinutes();
  const currentMinutes = hour * 60 + min;

  // Friday: 4:00 PM (16:00 = 960 mins) to 9:45 PM (21:45 = 1305 mins)
  // Other days: 12:00 PM (12:00 = 720 mins) to 9:45 PM (21:45 = 1305 mins)
  const openTimeMinutes = (dayIndex === 5) ? 960 : 720;
  const closeTimeMinutes = 1305;

  const isOpen = currentMinutes >= openTimeMinutes && currentMinutes <= closeTimeMinutes;

  if (isOpen) {
    badge.innerHTML = `<span class="status-dot"></span> Open Now (${currentDay})`;
    badge.style.background = 'rgba(46, 204, 113, 0.15)';
    badge.style.color = '#2ECC71';
    badge.style.borderColor = 'rgba(46, 204, 113, 0.3)';
  } else {
    badge.innerHTML = `<span class="status-dot" style="background:#E74C3C;"></span> Closed Now • Opens ${dayIndex === 5 ? '4:00 PM' : '12:00 PM'}`;
    badge.style.background = 'rgba(231, 76, 60, 0.15)';
    badge.style.color = '#E74C3C';
    badge.style.borderColor = 'rgba(231, 76, 60, 0.3)';
  }
}

/* --------------------------------------------------------------------------
   8. CONTACT / ENQUIRY FORM VALIDATION & SUBMISSION
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('form-toast');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="name"]').value.trim();
    const phone = form.querySelector('[name="phone"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();

    if (!name || !phone || !email) {
      alert('Please fill out all required fields (Name, Phone, Email).');
      return;
    }

    // Success response state
    if (toast) {
      toast.style.display = 'block';
      toast.textContent = '✨ Thank you! Your enquiry has been received. Ali’s Cafe will contact you shortly.';
      form.reset();

      setTimeout(() => {
        toast.style.display = 'none';
      }, 6000);
    }
  });
}

/* --------------------------------------------------------------------------
   9. FLOATING WHATSAPP & SPECIALS QUICK INQUIRY
   -------------------------------------------------------------------------- */
function initWhatsAppFloating() {
  const waBtn = document.getElementById('whatsapp-btn');
  if (!waBtn) return;

  const phone = (typeof CAFE_CONFIG !== 'undefined' && CAFE_CONFIG.contact && CAFE_CONFIG.contact.whatsappNumber) 
    ? CAFE_CONFIG.contact.whatsappNumber 
    : '15552345678';
  
  const msg = (typeof CAFE_CONFIG !== 'undefined' && CAFE_CONFIG.contact && CAFE_CONFIG.contact.whatsappDefaultMessage)
    ? CAFE_CONFIG.contact.whatsappDefaultMessage
    : 'Hi Ali’s Cafe, I’d like to know more about your menu.';

  waBtn.href = `https://wa.me/${encodeURIComponent(phone)}?text=${encodeURIComponent(msg)}`;

  // Quick inquiry buttons on featured specials
  const specialOrderBtns = document.querySelectorAll('.special-order-btn');
  specialOrderBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const itemName = btn.getAttribute('data-item') || 'Item';
      const customMsg = `Hi Ali’s Cafe, I’d like to inquire / order: ${itemName}`;
      window.open(`https://wa.me/${encodeURIComponent(phone)}?text=${encodeURIComponent(customMsg)}`, '_blank');
    });
  });
}

// Fade in animation helper
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);
