/**
 * ALI'S CAFE - ADMIN CONTROL PANEL ENGINE (admin.js)
 * Manages live config editing, menu items CRUD, gallery space photo management,
 * stats counter updates, LocalStorage persistence & config.js file export.
 */

document.addEventListener('DOMContentLoaded', () => {
  initAdminAuth();
  initAdminTabs();
});

// PC File Upload Handler (Converts local PC image file or sets assets/images/ path)
window.handleFileUpload = function(fileInput, targetInputId) {
  const file = fileInput.files[0];
  if (!file) return;

  const targetInput = document.getElementById(targetInputId);
  if (!targetInput) return;

  // Use relative PC path assets/images/filename if saved in folder, or Base64 Data URL
  const relativePath = `assets/images/${file.name}`;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    targetInput.value = relativePath;
    targetInput.setAttribute('data-base64', e.target.result);
    showToast(`📁 Selected "${file.name}" from PC! Saved to assets/images/${file.name}`);
  };
  reader.readAsDataURL(file);
};

// Passcode Authentication (Default PIN: 1234)
function initAdminAuth() {
  const loginWrapper = document.getElementById('login-wrapper');
  const adminApp = document.getElementById('admin-app');
  const pinInput = document.getElementById('pin-input');
  const loginBtn = document.getElementById('login-btn');
  const logoutBtn = document.getElementById('logout-btn');

  const checkAuth = () => {
    if (sessionStorage.getItem('ALIS_CAFE_ADMIN_AUTH') === 'true') {
      if (loginWrapper) loginWrapper.style.display = 'none';
      if (adminApp) adminApp.style.display = 'flex';
      loadConfigIntoForms();
    } else {
      if (loginWrapper) loginWrapper.style.display = 'flex';
      if (adminApp) adminApp.style.display = 'none';
    }
  };

  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      if (pinInput.value.trim() === '1234') {
        sessionStorage.setItem('ALIS_CAFE_ADMIN_AUTH', 'true');
        checkAuth();
        showToast('Login Successful! Welcome Admin.');
      } else {
        alert('Incorrect Admin PIN! (Default PIN is 1234)');
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('ALIS_CAFE_ADMIN_AUTH');
      checkAuth();
    });
  }

  checkAuth();
}

// Tab Switching Navigation
function initAdminTabs() {
  const navItems = document.querySelectorAll('.admin-nav-item');
  const tabPanes = document.querySelectorAll('.tab-pane');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetTab = item.getAttribute('data-tab');

      navItems.forEach(nav => nav.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));

      item.classList.add('active');
      const activePane = document.getElementById(`tab-${targetTab}`);
      if (activePane) activePane.classList.add('active');
    });
  });
}

// Helper: Get Current Config Object
function getActiveConfig() {
  const saved = localStorage.getItem('ALIS_CAFE_CONFIG_OVERRIDE');
  if (saved) {
    try { return JSON.parse(saved); } catch(e){}
  }
  return window.ALIS_CAFE_CONFIG || CAFE_CONFIG;
}

// Populate Forms from Active Config
function loadConfigIntoForms() {
  const cfg = getActiveConfig();

  // Home / Hero Inputs
  if (document.getElementById('cfg-brand-name')) document.getElementById('cfg-brand-name').value = cfg.brand?.name || "Ali’s Cafe";
  if (document.getElementById('cfg-tagline')) document.getElementById('cfg-tagline').value = cfg.brand?.tagline || "";
  if (document.getElementById('cfg-hero-headline')) document.getElementById('cfg-hero-headline').value = cfg.hero?.headline || "";
  if (document.getElementById('cfg-hero-badge')) document.getElementById('cfg-hero-badge').value = cfg.hero?.badge || "";
  if (document.getElementById('cfg-hero-subtext')) document.getElementById('cfg-hero-subtext').value = cfg.hero?.subtext || "";
  if (document.getElementById('cfg-phone')) document.getElementById('cfg-phone').value = cfg.contact?.phone || "";
  if (document.getElementById('cfg-address')) document.getElementById('cfg-address').value = cfg.contact?.address || "";

  // Story & Stats Counters & Section Images
  if (document.getElementById('cfg-stat-est')) document.getElementById('cfg-stat-est').value = cfg.achievements?.[0]?.value || "2021";
  if (document.getElementById('cfg-stat-guests')) document.getElementById('cfg-stat-guests').value = cfg.achievements?.[1]?.value || "25000";
  if (document.getElementById('cfg-stat-delights')) document.getElementById('cfg-stat-delights').value = cfg.achievements?.[2]?.value || "60";
  if (document.getElementById('cfg-stat-years')) document.getElementById('cfg-stat-years').value = cfg.achievements?.[3]?.value || "5";

  if (document.getElementById('cfg-about-p1')) document.getElementById('cfg-about-p1').value = cfg.about?.paragraph1 || "";
  if (document.getElementById('cfg-story-p1')) document.getElementById('cfg-story-p1').value = cfg.story?.paragraph1 || "";
  if (document.getElementById('cfg-story-p2')) document.getElementById('cfg-story-p2').value = cfg.story?.paragraph2 || "";

  // Render Section Image Tables
  renderHeroImagesTable(cfg.heroImages || ["assets/images/hero-bg.jpg"]);
  renderAboutImagesTable(cfg.aboutImages || ["assets/images/story_cafe.jpg"]);
  renderStoryImagesTable(cfg.storyImages || ["assets/images/hero-bg.jpg"]);

  // Populate Menu Items Table
  renderMenuItemsTable(cfg.menuItems || []);

  // Populate Specials Form
  renderSpecialsForm(cfg.featuredSpecials || []);

  // Populate Gallery Table
  renderGalleryTable(cfg.galleryImages || []);
}

// Render Hero Images Table
function renderHeroImagesTable(images) {
  const tbody = document.getElementById('hero-img-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  images.forEach((img, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td><img src="${img}" class="table-img" alt="Hero ${idx + 1}"></td>
      <td><input type="text" class="form-input hero-img-input" data-idx="${idx}" value="${img}"></td>
      <td>
        <button class="btn-admin btn-admin-danger" onclick="deleteHeroImage(${idx})" style="padding:0.3rem 0.6rem; font-size:0.75rem;">Delete 🗑️</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Add Hero Image
window.addHeroImage = function() {
  const src = document.getElementById('new-hero-img-src').value.trim();
  if (!src) return alert('Please enter hero image path!');
  const cfg = getActiveConfig();
  if (!cfg.heroImages) cfg.heroImages = ["assets/images/hero-bg.jpg"];
  cfg.heroImages.push(src);
  document.getElementById('new-hero-img-src').value = '';
  saveConfig(cfg);
  renderHeroImagesTable(cfg.heroImages);
  showToast('Added Hero Image!');
};

// Delete Hero Image
window.deleteHeroImage = function(idx) {
  const cfg = getActiveConfig();
  if (!cfg.heroImages) return;
  cfg.heroImages.splice(idx, 1);
  saveConfig(cfg);
  renderHeroImagesTable(cfg.heroImages);
  showToast('Deleted Hero Image!');
};

// Render About Images Table
function renderAboutImagesTable(images) {
  const tbody = document.getElementById('about-img-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  images.forEach((img, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td><img src="${img}" class="table-img" alt="About ${idx + 1}"></td>
      <td><input type="text" class="form-input about-img-input" data-idx="${idx}" value="${img}"></td>
      <td>
        <button class="btn-admin btn-admin-danger" onclick="deleteAboutImage(${idx})" style="padding:0.3rem 0.6rem; font-size:0.75rem;">Delete 🗑️</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Add About Image
window.addAboutImage = function() {
  const src = document.getElementById('new-about-img-src').value.trim();
  if (!src) return alert('Please enter about image path!');
  const cfg = getActiveConfig();
  if (!cfg.aboutImages) cfg.aboutImages = ["assets/images/story_cafe.jpg"];
  cfg.aboutImages.push(src);
  document.getElementById('new-about-img-src').value = '';
  saveConfig(cfg);
  renderAboutImagesTable(cfg.aboutImages);
  showToast('Added About Image!');
};

// Delete About Image
window.deleteAboutImage = function(idx) {
  const cfg = getActiveConfig();
  if (!cfg.aboutImages) return;
  cfg.aboutImages.splice(idx, 1);
  saveConfig(cfg);
  renderAboutImagesTable(cfg.aboutImages);
  showToast('Deleted About Image!');
};

// Render Story Images Table
function renderStoryImagesTable(images) {
  const tbody = document.getElementById('story-img-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  images.forEach((img, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td><img src="${img}" class="table-img" alt="Story ${idx + 1}"></td>
      <td><input type="text" class="form-input story-img-input" data-idx="${idx}" value="${img}"></td>
      <td>
        <button class="btn-admin btn-admin-danger" onclick="deleteStoryImage(${idx})" style="padding:0.3rem 0.6rem; font-size:0.75rem;">Delete 🗑️</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Add Story Image
window.addStoryImage = function() {
  const src = document.getElementById('new-story-img-src').value.trim();
  if (!src) return alert('Please enter story image path!');
  const cfg = getActiveConfig();
  if (!cfg.storyImages) cfg.storyImages = ["assets/images/hero-bg.jpg"];
  cfg.storyImages.push(src);
  document.getElementById('new-story-img-src').value = '';
  saveConfig(cfg);
  renderStoryImagesTable(cfg.storyImages);
  showToast('Added Story Image!');
};

// Delete Story Image
window.deleteStoryImage = function(idx) {
  const cfg = getActiveConfig();
  if (!cfg.storyImages) return;
  cfg.storyImages.splice(idx, 1);
  saveConfig(cfg);
  renderStoryImagesTable(cfg.storyImages);
  showToast('Deleted Story Image!');
};

// Render Menu Items Table
function renderMenuItemsTable(items) {
  const tbody = document.getElementById('menu-table-body');
  if (!tbody) return;

  tbody.innerHTML = '';
  items.forEach((item, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td><img src="${item.image}" class="table-img" alt="${item.name}"></td>
      <td><strong>${item.name}</strong></td>
      <td><span class="btn-admin btn-admin-outline" style="padding:0.2rem 0.6rem; font-size:0.75rem;">${item.category}</span></td>
      <td>${item.tag || '-'}</td>
      <td>
        <button class="btn-admin btn-admin-danger" onclick="deleteMenuItem(${idx})" style="padding:0.3rem 0.6rem; font-size:0.75rem;">Delete 🗑️</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  const countBadge = document.getElementById('menu-item-count');
  if (countBadge) countBadge.textContent = `${items.length} Items`;
}

// Render Specials Form
function renderSpecialsForm(specials) {
  const container = document.getElementById('specials-form-container');
  if (!container) return;

  container.innerHTML = '';
  specials.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'admin-card';
    card.innerHTML = `
      <div class="card-title">
        <span>Special Highlight #${idx + 1} — ${item.name}</span>
        <button class="btn-admin btn-admin-danger" onclick="deleteSpecialItem(${idx})" style="padding:0.3rem 0.6rem; font-size:0.75rem;">Delete Special 🗑️</button>
      </div>
      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">Dish Name</label>
          <input type="text" class="form-input special-input-name" data-idx="${idx}" value="${item.name}">
        </div>
        <div class="form-group">
          <label class="form-label">Tag Badge (e.g. 🍪 Biscoff Sundae)</label>
          <input type="text" class="form-input special-input-tag" data-idx="${idx}" value="${item.tag}">
        </div>
        <div class="form-group form-grid-full">
          <label class="form-label">Image Path 🖼️ (Edit or Delete)</label>
          <div style="display:flex; gap:0.5rem; align-items:center;">
            <img src="${item.image}" style="width:40px; height:40px; object-fit:contain; background:#000; border-radius:4px;" alt="preview">
            <input type="text" class="form-input special-input-img" data-idx="${idx}" value="${item.image}">
            <button class="btn-admin btn-admin-danger" onclick="this.previousElementSibling.value='';" style="flex-shrink:0;">Delete Image 🗑️</button>
          </div>
        </div>
        <div class="form-group form-grid-full">
          <label class="form-label">Description</label>
          <textarea class="form-textarea special-input-desc" data-idx="${idx}">${item.description}</textarea>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Add New Special Item
function addNewSpecialItem() {
  const name = document.getElementById('new-special-name').value.trim();
  const tag = document.getElementById('new-special-tag').value.trim();
  const image = document.getElementById('new-special-img').value.trim();
  const description = document.getElementById('new-special-desc').value.trim();

  if (!name || !image) {
    alert('Please enter special dish name and image path!');
    return;
  }

  const cfg = getActiveConfig();
  if (!cfg.featuredSpecials) cfg.featuredSpecials = [];

  cfg.featuredSpecials.push({ name, tag: tag || "Chef Special", image, description });

  document.getElementById('new-special-name').value = '';
  document.getElementById('new-special-tag').value = '';
  document.getElementById('new-special-img').value = '';
  document.getElementById('new-special-desc').value = '';

  saveConfig(cfg);
  renderSpecialsForm(cfg.featuredSpecials);
  showToast(`Added "${name}" to Specials!`);
}

// Delete Special Item
window.deleteSpecialItem = function(idx) {
  const cfg = getActiveConfig();
  if (!cfg.featuredSpecials) return;

  const item = cfg.featuredSpecials[idx];
  if (confirm(`Delete "${item.name}" from Specials Highlights?`)) {
    cfg.featuredSpecials.splice(idx, 1);
    saveConfig(cfg);
    renderSpecialsForm(cfg.featuredSpecials);
    showToast(`Deleted item from Specials.`);
  }
};

// Render Gallery Table
function renderGalleryTable(images) {
  const tbody = document.getElementById('gallery-table-body');
  if (!tbody) return;

  tbody.innerHTML = '';
  images.forEach((img, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td><img src="${img.src}" class="table-img" alt="${img.title}"></td>
      <td><strong>${img.title}</strong></td>
      <td><span class="btn-admin btn-admin-outline" style="padding:0.2rem 0.6rem; font-size:0.75rem;">${img.category}</span></td>
      <td>
        <button class="btn-admin btn-admin-danger" onclick="deleteGalleryItem(${idx})" style="padding:0.3rem 0.6rem; font-size:0.75rem;">Delete 🗑️</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Add New Menu Item
function addNewMenuItem() {
  const name = document.getElementById('new-dish-name').value.trim();
  const category = document.getElementById('new-dish-category').value;
  const tag = document.getElementById('new-dish-tag').value.trim();
  const image = document.getElementById('new-dish-image').value.trim();

  if (!name || !image) {
    alert('Please enter dish name and image path!');
    return;
  }

  const cfg = getActiveConfig();
  if (!cfg.menuItems) cfg.menuItems = [];

  cfg.menuItems.unshift({ name, category, tag: tag || category, image });
  
  // Clear inputs
  document.getElementById('new-dish-name').value = '';
  document.getElementById('new-dish-tag').value = '';
  document.getElementById('new-dish-image').value = '';

  saveConfig(cfg);
  renderMenuItemsTable(cfg.menuItems);
  showToast(`Added "${name}" to Menu!`);
}

// Delete Menu Item
window.deleteMenuItem = function(idx) {
  const cfg = getActiveConfig();
  if (!cfg.menuItems) return;

  const item = cfg.menuItems[idx];
  if (confirm(`Are you sure you want to delete "${item.name}" from Menu?`)) {
    cfg.menuItems.splice(idx, 1);
    saveConfig(cfg);
    renderMenuItemsTable(cfg.menuItems);
    showToast(`Deleted item from menu.`);
  }
};

// Add New Gallery Item
function addNewGalleryItem() {
  const title = document.getElementById('new-space-title').value.trim();
  const category = document.getElementById('new-space-category').value;
  const src = document.getElementById('new-space-src').value.trim();

  if (!title || !src) {
    alert('Please enter space photo title and image path!');
    return;
  }

  const cfg = getActiveConfig();
  if (!cfg.galleryImages) cfg.galleryImages = [];

  cfg.galleryImages.unshift({ title, category, src, caption: title });

  document.getElementById('new-space-title').value = '';
  document.getElementById('new-space-src').value = '';

  saveConfig(cfg);
  renderGalleryTable(cfg.galleryImages);
  showToast(`Added space photo to Gallery!`);
}

// Delete Gallery Item
window.deleteGalleryItem = function(idx) {
  const cfg = getActiveConfig();
  if (!cfg.galleryImages) return;

  if (confirm(`Delete this photo from Gallery?`)) {
    cfg.galleryImages.splice(idx, 1);
    saveConfig(cfg);
    renderGalleryTable(cfg.galleryImages);
    showToast(`Deleted gallery photo.`);
  }
};

// Save Main Form Settings
function saveAllSettings() {
  const cfg = getActiveConfig();

  // Home / Hero
  if (!cfg.brand) cfg.brand = {};
  cfg.brand.name = document.getElementById('cfg-brand-name').value.trim();
  cfg.brand.tagline = document.getElementById('cfg-tagline').value.trim();

  if (!cfg.hero) cfg.hero = {};
  cfg.hero.headline = document.getElementById('cfg-hero-headline').value.trim();
  cfg.hero.badge = document.getElementById('cfg-hero-badge').value.trim();
  cfg.hero.subtext = document.getElementById('cfg-hero-subtext').value.trim();

  // Collect Hero Images
  const heroInputs = document.querySelectorAll('.hero-img-input');
  cfg.heroImages = Array.from(heroInputs).map(inp => inp.value.trim()).filter(Boolean);
  if (cfg.heroImages.length) cfg.hero.bgImage = cfg.heroImages[0];

  if (!cfg.contact) cfg.contact = {};
  cfg.contact.phone = document.getElementById('cfg-phone').value.trim();
  cfg.contact.address = document.getElementById('cfg-address').value.trim();

  // Stats Counters
  if (!cfg.achievements) cfg.achievements = [];
  cfg.achievements[0] = { label: "Established", value: document.getElementById('cfg-stat-est').value.trim(), suffix: "", isPlaceholder: false };
  cfg.achievements[1] = { label: "Happy Guests", value: document.getElementById('cfg-stat-guests').value.trim(), suffix: "+", isPlaceholder: false };
  cfg.achievements[2] = { label: "Menu Delights", value: document.getElementById('cfg-stat-delights').value.trim(), suffix: "+", isPlaceholder: false };
  cfg.achievements[3] = { label: "Years of Growth", value: document.getElementById('cfg-stat-years').value.trim(), suffix: "+", isPlaceholder: false };

  // Story & About
  if (!cfg.about) cfg.about = {};
  const aboutInputs = document.querySelectorAll('.about-img-input');
  cfg.aboutImages = Array.from(aboutInputs).map(inp => inp.value.trim()).filter(Boolean);
  if (cfg.aboutImages.length) cfg.about.image = cfg.aboutImages[0];
  cfg.about.paragraph1 = document.getElementById('cfg-about-p1').value.trim();

  if (!cfg.story) cfg.story = {};
  const storyInputs = document.querySelectorAll('.story-img-input');
  cfg.storyImages = Array.from(storyInputs).map(inp => inp.value.trim()).filter(Boolean);
  if (cfg.storyImages.length) cfg.story.image = cfg.storyImages[0];
  cfg.story.paragraph1 = document.getElementById('cfg-story-p1').value.trim();
  cfg.story.paragraph2 = document.getElementById('cfg-story-p2').value.trim();

  // Specials Inputs
  const names = document.querySelectorAll('.special-input-name');
  const tags = document.querySelectorAll('.special-input-tag');
  const imgs = document.querySelectorAll('.special-input-img');
  const descs = document.querySelectorAll('.special-input-desc');

  cfg.featuredSpecials = [];
  names.forEach((el, i) => {
    cfg.featuredSpecials.push({
      name: el.value.trim(),
      tag: tags[i]?.value.trim() || "",
      image: imgs[i]?.value.trim() || "",
      description: descs[i]?.value.trim() || ""
    });
  });

  saveConfig(cfg);
  showToast('⚡ Settings Saved & Live Website Updated!');
}

// Save Config to LocalStorage
function saveConfig(cfg) {
  localStorage.setItem('ALIS_CAFE_CONFIG_OVERRIDE', JSON.stringify(cfg));
}

// Export Formatted config.js File
function exportConfigFile() {
  const cfg = getActiveConfig();
  const fileString = `/**
 * ALI'S CAFE - CENTRAL CLIENT CONFIGURATION FILE (EXPORTED FROM ADMIN PANEL)
 * Generated on: ${new Date().toLocaleString()}
 */

const CAFE_CONFIG = ${JSON.stringify(cfg, null, 2)};

// Load overrides from LocalStorage if present
(function() {
  const savedConfig = localStorage.getItem('ALIS_CAFE_CONFIG_OVERRIDE');
  if (savedConfig) {
    try {
      const parsed = JSON.parse(savedConfig);
      Object.assign(CAFE_CONFIG, parsed);
    } catch(e){}
  }
})();

if (typeof window !== 'undefined') {
  window.ALIS_CAFE_CONFIG = CAFE_CONFIG;
}
`;

  const blob = new Blob([fileString], { type: 'text/javascript' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'config.js';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToast('📥 Exported config.js File Downloaded!');
}

// Reset Config to Factory Default
function resetToDefault() {
  if (confirm('Are you sure you want to reset all changes to factory defaults?')) {
    localStorage.removeItem('ALIS_CAFE_CONFIG_OVERRIDE');
    loadConfigIntoForms();
    showToast('Restored Factory Default Settings!');
  }
}

// Show Toast Notice
function showToast(msg) {
  let toast = document.getElementById('admin-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'admin-toast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
