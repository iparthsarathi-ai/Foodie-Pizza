// Foodie Pizza — Main JS

document.addEventListener("DOMContentLoaded", () => {
  renderMenu("all");
  initFilters();
  initMobileNav();
  initScrollNav();
});

// ── Render menu cards ─────────────────────────────────────────────────────────
function renderMenu(activeCategory) {
  const grid = document.getElementById("menu-grid");
  grid.innerHTML = "";

  const filtered = activeCategory === "all"
    ? menuData
    : menuData.filter(item => item.category === activeCategory);

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="col-span-full text-center py-20">
      <p style="font-size:1.1rem;color:var(--on-surface-variant);">No items in this category.</p>
    </div>`;
    return;
  }

  filtered.forEach((item, index) => {
    const card = createCard(item, index);
    grid.appendChild(card);
  });
}

// ── Build a single menu card ──────────────────────────────────────────────────
function createCard(item, index) {
  const article = document.createElement("article");
  article.className = "menu-card" + (item.tag === "CHEF'S PICK" || item.tag === "BEST VALUE" ? " featured-card" : "");
  article.dataset.category = item.category;
  article.style.animationDelay = `${index * 50}ms`;

  // Tag badge
  const tagHTML = item.tag
    ? `<div class="item-tag ${getTagClass(item.tag)}">${item.tag}</div>`
    : "";

  // Price display — sizes or single
  const priceHTML = item.hasSizes
    ? buildSizeTable(item.sizes)
    : `<span class="card-price">₹${item.price}</span>`;

  // WhatsApp message
  const waMsg = item.hasSizes
    ? `Hi Foodie Pizza! 🍕 I'd like to order:\n\n*${item.name}*\n\nPlease let me know the size & price. Thank you!`
    : `Hi Foodie Pizza! 🍕 I'd like to order:\n\n*${item.name}* — ₹${item.price}\n\nPlease confirm. Thank you!`;

  const waURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;

  article.innerHTML = `
    <div class="card-image-wrap">
      <img
        src="${item.image}"
        alt="${item.imageAlt}"
        class="card-img"
        loading="lazy"
        onerror="this.src='https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800'"
      />
      ${tagHTML}
    </div>
    <div class="card-body">
      <div class="card-header">
        <div class="card-title-wrap">
          <span class="diet-dot veg-dot" title="Vegetarian"></span>
          <h3 class="card-title">${item.name}</h3>
        </div>
        ${!item.hasSizes ? `<span class="card-price">₹${item.price}</span>` : ""}
      </div>
      ${item.hasSizes ? buildSizeTable(item.sizes) : ""}
      <p class="card-desc">${item.description}</p>
      <a href="${waURL}" class="wa-btn" target="_blank" rel="noopener noreferrer"
         id="order-btn-${item.id}" aria-label="Order ${item.name} on WhatsApp">
        <svg class="wa-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.516.899 3.3 1.374 5.24 1.375 5.417 0 9.825-4.409 9.828-9.828.001-2.625-1.022-5.093-2.881-6.953-1.859-1.86-4.327-2.883-6.953-2.883-5.417 0-9.825 4.409-9.828 9.828-.001 1.83.5 3.618 1.448 5.174l-1.011 3.692 3.784-.993zm11.383-7.533c-.301-.15-1.781-.879-2.057-.979-.275-.1-.475-.15-.675.15-.2.3-.775 1.05-.95 1.25-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.487-.89-.793-1.49-1.773-1.665-2.074-.175-.3-.019-.462.13-.611.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.493-.51-.675-.519-.175-.009-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.899 1.225 3.1.15.2 2.116 3.23 5.125 4.527.715.308 1.274.492 1.709.631.718.228 1.371.196 1.887.119.575-.085 1.781-.727 2.031-1.428.25-.7.25-1.3.175-1.428-.075-.125-.275-.2-.575-.35z"/>
        </svg>
        <span>Order via WhatsApp</span>
      </a>
    </div>
  `;
  return article;
}

// ── Build pizza size table ────────────────────────────────────────────────────
function buildSizeTable(sizes) {
  const entries = Object.entries(sizes);
  return `
    <div class="size-table">
      ${entries.map(([size, price]) => `
        <div class="size-cell">
          <span class="size-label">${size}</span>
          <span class="size-price">₹${price}</span>
        </div>
      `).join("")}
    </div>
  `;
}

// ── Tag CSS class ─────────────────────────────────────────────────────────────
function getTagClass(tag) {
  if (!tag) return "";
  const t = tag.toUpperCase();
  if (t.includes("SPICY") || t.includes("HOT"))    return "tag-hot";
  if (t.includes("DEAL") || t.includes("VALUE") || t.includes("ONLY") || t.includes("COMBO")) return "tag-featured";
  if (t.includes("PREMIUM") || t.includes("PICK") || t.includes("CHEF")) return "tag-featured";
  if (t.includes("POPULAR") || t.includes("LOADED")) return "tag-new";
  return "tag-veg";
}

// ── Category filter buttons ───────────────────────────────────────────────────
function initFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      renderMenu(btn.dataset.category);
      document.getElementById("menu").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

// ── Mobile hamburger menu ─────────────────────────────────────────────────────
function initMobileNav() {
  const hamburger  = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeBtn   = document.getElementById("mobile-menu-close");
  const overlay    = document.getElementById("mobile-overlay");
  const navLinks   = mobileMenu.querySelectorAll("a");

  function openMenu() {
    mobileMenu.classList.add("open");
    overlay.classList.add("visible");
    hamburger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
  function closeMenu() {
    mobileMenu.classList.remove("open");
    overlay.classList.remove("visible");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);
  navLinks.forEach(link => link.addEventListener("click", closeMenu));
}

// ── Sticky nav shadow ─────────────────────────────────────────────────────────
function initScrollNav() {
  const nav = document.getElementById("main-nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("nav-scrolled", window.scrollY > 20);
  }, { passive: true });
}

// ── Newsletter form ───────────────────────────────────────────────────────────
document.getElementById("newsletter-form")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const input = this.querySelector("input[type='email']");
  const btn   = this.querySelector("button");
  if (!input.value) return;
  btn.textContent = "✓ Done!";
  input.value = "";
  setTimeout(() => { btn.textContent = "Join"; }, 3000);
});
