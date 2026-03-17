const defaultInventory = [
  {
    title: "Instrument 01",
    category: "Accessories",
    image: "images/ChatGPT Image Feb 7, 2026, 06_06_40 PM.png",
    note: ""
  },
  {
    title: "Instrument 02",
    category: "Accessories",
    image: "images/ChatGPT Image Feb 7, 2026, 11_27_32 PM.png",
    note: ""
  },
  {
    title: "Instrument 03",
    category: "Accessories",
    image: "images/ChatGPT Image Feb 7, 2026, 11_38_07 PM.png",
    note: ""
  },
  {
    title: "Instrument 04",
    category: "Accessories",
    image: "images/ChatGPT Image Feb 8, 2026, 12_27_42 AM.png",
    note: ""
  },
  {
    title: "Instrument 05",
    category: "Accessories",
    image: "images/ChatGPT Image Feb 8, 2026, 12_37_07 AM.png",
    note: "",
    fit: "contain"
  },
  {
    title: "Instrument 06",
    category: "Accessories",
    image: "images/ChatGPT Image Feb 8, 2026, 12_41_05 AM.png",
    note: "",
    fit: "contain"
  },
  {
    title: "Instrument 07",
    category: "Accessories",
    image: "images/ChatGPT Image Feb 8, 2026, 12_43_30 AM.png",
    note: "",
    fit: "contain"
  },
  {
    title: "Portable Turbine Unit",
    category: "Accessories",
    image: "images/portableTrurbineUnitchnfged1.jpeg",
    note: ""
  },
  {
    title: "Instrument 08",
    category: "Accessories",
    image: "images/WhatsApp Image 2026-02-07 at 18.09.13.jpeg",
    note: ""
  },
  {
    title: "Micromotor Cord",
    category: "Accessories",
    image: "images/MicromotorCord.jpeg",
    note: ""
  },
  {
    title: "New 01",
    category: "Accessories",
    image: "images/new1.jpeg",
    note: ""
  },
  {
    title: "New 02",
    category: "Accessories",
    image: "images/new2.jpeg",
    note: ""
  },
  {
    title: "New 03",
    category: "Accessories",
    image: "images/new3.jpeg",
    note: ""
  },
  {
    title: "Foot Control",
    category: "Accessories",
    image: "images/new4.png",
    note: ""
  },
  {
    title: "New 05",
    category: "Accessories",
    image: "images/new5.png",
    note: ""
  },
  {
    title: "Bur Wrench",
    category: "Accessories",
    image: "images/new6.jpeg",
    note: ""
  },
  {
    title: "Transformer",
    category: "Accessories",
    image: "images/new7.png",
    note: ""
  },
  {
    title: "Oil free compressor head 1 HP with accessories",
    category: "Dental Compressor Parts",
    image: "images/Comp1.jpeg",
    note: ""
  },
  {
    title: "Piston leather 0.75/1 HP",
    category: "Dental Compressor Parts",
    image: "images/Comp2.jpg",
    note: ""
  },
  {
    title: "Air Filter Metal",
    category: "Dental Compressor Parts",
    image: "images/Comp3.png",
    note: ""
  },
  {
    title: "Piston 1 HP",
    category: "Dental Compressor Parts",
    image: "images/Comp4.jpg",
    note: ""
  },
  {
    title: "Magnetic Valve",
    category: "Dental Compressor Parts",
    image: "images/Comp5.jpg",
    note: ""
  },
  {
    title: "Pressure Gauge",
    category: "Dental Compressor Parts",
    image: "images/Comp6.jpg",
    note: ""
  },
  {
    title: "Air out nozzle",
    category: "Dental Compressor Parts",
    image: "images/Comp7.jpg",
    note: ""
  },
  {
    title: "Moisture Filter",
    category: "Dental Compressor Parts",
    image: "images/Comp8.jpg",
    note: ""
  },
  {
    title: "Autocut Switch",
    category: "Dental Compressor Parts",
    image: "images/Comp9.jpeg",
    note: ""
  },
  {
    title: "Air pipe",
    category: "Dental Compressor Parts",
    image: "images/Comp10.jpeg",
    note: ""
  },
  {
    title: "Air filter plastic",
    category: "Dental Compressor Parts",
    image: "images/Comp11.png",
    note: ""
  },
  {
    title: "NRV",
    category: "Dental Compressor Parts",
    image: "images/Comp12.png",
    note: ""
  },
  {
    title: "Compressor bottom rubber set",
    category: "Dental Compressor Parts",
    image: "images/Comp13.jpeg",
    note: ""
  },
  {
    title: "NRV with magnetic valve",
    category: "Dental Compressor Parts",
    image: "images/Comp14.jpeg",
    note: ""
  },
  {
    title: "Compressor Parts",
    category: "Dental Compressor Parts",
    image: "images/CompressorParts.png",
    note: ""
  },
  {
    title: "Compressor Parts",
    category: "Dental Compressor Parts",
    image: "images/CompressorParts2.png",
    note: ""
  },
  {
    title: "Compressor Parts",
    category: "Dental Compressor Parts",
    image: "images/CompressorParts3.png",
    note: ""
  },
  {
    title: "Compressor Parts",
    category: "Dental Compressor Parts",
    image: "images/CompressorParts4.png",
    note: ""
  },
  {
    title: "Compressor Parts",
    category: "Dental Compressor Parts",
    image: "images/CompressorParts5.png",
    note: ""
  },
  {
    title: "Air Scalar",
    category: "Dental Handpieces",
    image: "images/airScalar.jpeg",
    note: ""
  },
  {
    title: "Handpiece 2",
    category: "Dental Handpieces",
    image: "images/handpiece2.jpg",
    note: ""
  },
  {
    title: "3 Way Syringe",
    category: "Dental Handpieces",
    image: "images/3waysyringe.jpeg",
    note: "",
    fit: "contain"
  },
  {
    title: "Straight Handpiece",
    category: "Dental Handpieces",
    image: "images/straightHhandpiece.png",
    note: "",
    fit: "contain"
  },
  {
    title: "Water Filter",
    category: "Dental Chair Parts",
    image: "images/chairparts1.png",
    note: ""
  },
   {
    title: "Chair Diaphragm",
    category: "Dental Chair Parts",
    image: "images/chairdiaphragm.png",
    note: ""
  },
  {
    title: "Bottle Cap",
    category: "Dental Chair Parts",
    image: "images/BottleCapp.png",
    note: ""
  },
  {
    title: "Glass Bowl Funnel",
    category: "Dental Chair Parts",
    image: "images/GlassBowlFunnel.png",
    note: ""
  },
  {
    title: "Control Valve",
    category: "Dental Chair Parts",
    image: "images/chairparts2.png",
    note: ""
  },
  {
    title: "Integrated Valve",
    category: "Dental Chair Parts",
    image: "images/chairparts3.png",
    note: ""
  },
  {
    title: "Air Rreducer",
    category: "Dental Chair Parts",
    image: "images/chairparts4.png",
    note: ""
  },
  {
    title: "Weak Suction holder with connector",
    category: "Dental Chair Parts",
    image: "images/chairparts5.png",
    note: ""
  },
  {
    title: "Normal open valve",
    category: "Dental Chair Parts",
    image: "images/chairparts6.png",
    note: ""
  },
  {
    title: "Foot Control",
    category: "Dental Chair Parts",
    image: "images/chairparts7.png",
    note: ""
  },
  {
    title: "Square pressure meter",
    category: "Dental Chair Parts",
    image: "images/chairparts8.png",
    note: ""
  },
  {
    title: "Pressure valve",
    category: "Dental Chair Parts",
    image: "images/chairparts9.png",
    note: ""
  },
  {
    title: "Coupling",
    category: "Dental Chair Parts",
    image: "images/Coupling2to4.png",
    note: ""
  },
  {
    title: "Coupling",
    category: "Dental Chair Parts",
    image: "images/Coupling4to2.png",
    note: ""
  },
  {
    title: "Glass Bowl",
    category: "Dental Chair Parts",
    image: "images/chairparts10.png",
    note: ""
  },
  {
    title: "Glass Bowl",
    category: "Dental Chair Parts",
    image: "images/chairparts11.png",
    note: ""
  },
  {
    title: "Glass Bowl",
    category: "Dental Chair Parts",
    image: "images/chairparts12.png",
    note: ""
  },
  {
    title: "Glass Bowl",
    category: "Dental Chair Parts",
    image: "images/chairparts13.png",
    note: ""
  },
  {
    title: "Scaler Part 01",
    category: "Dental Scaler Parts",
    image: "images/scalerparts1.jpeg",
    note: ""
  },
  {
    title: "Scaler Part 02",
    category: "Dental Scaler Parts",
    image: "images/scalarparts2.jpeg",
    note: ""
  },
  {
    title: "Scaler solenoid valve",
    category: "Dental Scaler Parts",
    image: "images/scalerparts3.png",
    note: ""
  },
  {
    title: "Scaler Part 04",
    category: "Dental Scaler Parts",
    image: "images/scalarparts4.jpeg",
    note: ""
  },
  {
    title: "Scaler tip opener",
    category: "Dental Scaler Parts",
    image: "images/scalertipopener.jpg",
    note: ""
  },
  {
    title: "Scaler cord",
    category: "Dental Scaler Parts",
    image: "images/Scalaercord.png",
    note: ""
  }
].map((item, index) => ({
  id: `prd-${index + 1}`,
  ...item
}));

const CART_KEY = "ddd_cart";
const SESSION_KEY = "ddd_session_profile";
const API_BASE = window.APP_CONFIG?.API_BASE || "http://localhost:4000";
const SITE_URL = window.APP_CONFIG?.SITE_URL || window.location.origin;
const DISABLE_CHECKOUT = true;
const THEME_KEY = "ddd_theme";
const CONTACT_PHONE = "+919335485398";
const WHATSAPP_NUMBER = "919335485398";
const WISHLIST_KEY = "ddd_wishlist";
const WISHLIST_PENDING_KEY = "ddd_wishlist_pending";
let wishlistIds = null;
let wishlistSyncWarned = false;

let inventory = [...defaultInventory];
let productMap = new Map(inventory.map((item) => [item.id, item]));
let activeCategory = "All";
let searchQuery = "";
let sortMode = "default";

const grid = document.getElementById("grid");
const filters = document.getElementById("filters");
const pageCategory = document.body?.dataset?.category || "All";
const CATEGORY_PAGE_MAP = {
  "Dental Compressor Parts": "dental-compressor-parts.html",
  "Dental Chair Parts": "dental-chair-parts.html",
  "Dental Handpieces": "dental-handpieces.html",
  "Dental Scaler Parts": "dental-scaler-parts.html",
  Accessories: "accessories.html"
};

function getCategories() {
  return ["All", ...new Set(inventory.map((item) => item.category))];
}

function setInventory(nextInventory) {
  inventory = nextInventory;
  productMap = new Map(inventory.map((item) => [item.id, item]));
}

function getCurrentPagePath() {
  return `${window.location.pathname}${window.location.search || ""}${window.location.hash || ""}`;
}

function getReturnUrlFromReferrer() {
  try {
    const ref = document.referrer ? new URL(document.referrer) : null;
    if (!ref || ref.origin !== window.location.origin) return "";
    const page = ref.pathname.split("/").pop() || "index.html";
    return `${page}${ref.search}${ref.hash}`;
  } catch {
    return "";
  }
}

function getLoginUrl() {
  const current = getCurrentPagePath();
  const next = current.includes("login.html") ? getReturnUrlFromReferrer() || "index.html" : current;
  return `login.html?next=${encodeURIComponent(next)}`;
}

function normalizeNextUrl(nextUrl) {
  const fallback = "index.html";
  if (!nextUrl) return fallback;

  if (/^\/\//.test(nextUrl)) return fallback;

  if (/^https?:\/\//i.test(nextUrl)) {
    try {
      const url = new URL(nextUrl);
      if (url.origin !== window.location.origin) return fallback;
      return `${url.pathname}${url.search}${url.hash}`;
    } catch {
      return fallback;
    }
  }

  if (nextUrl.includes("login.html")) return fallback;
  return nextUrl;
}

function guardCheckoutPage() {
  if (!DISABLE_CHECKOUT) return false;
  if (!/checkout\.html$/i.test(window.location.pathname)) return false;
  window.location.href = "index.html";
  return true;
}

function getCategoryPageHref(category) {
  return CATEGORY_PAGE_MAP[category] || "#";
}

function getBreadcrumbHtml(items, extraClass = "") {
  const classes = ["breadcrumb"];
  if (extraClass) classes.push(extraClass);
  const crumbs = items
    .map((item, index) => {
      const isLast = index === items.length - 1;
      const label = item.label || "";
      if (isLast || !item.href) {
        return `<span class="breadcrumb-current" aria-current="page">${label}</span>`;
      }
      return `<a href="${item.href}">${label}</a>`;
    })
    .join(`<span class="breadcrumb-separator" aria-hidden="true">/</span>`);

  return `<nav class="${classes.join(" ")}" aria-label="Breadcrumb">${crumbs}</nav>`;
}

function setupBreadcrumbs() {
  if (pageCategory === "All") return;
  const main = document.querySelector("main");
  const toolbar = document.querySelector(".toolbar");
  if (!(main instanceof HTMLElement) || !(toolbar instanceof HTMLElement)) return;
  if (main.querySelector(".page-breadcrumb")) return;

  toolbar.insertAdjacentHTML(
    "beforebegin",
    getBreadcrumbHtml(
      [
        { label: "Home", href: "index.html" },
        { label: pageCategory }
      ],
      "page-breadcrumb"
    )
  );
}

function setGridState(kind, message) {
  if (!grid) return;
  const spinner = kind === "loading" ? `<span class="state-spinner" aria-hidden="true"></span>` : "";
  grid.innerHTML = `<div class="empty state-${kind}">${spinner}<span class="state-message">${message}</span></div>`;
}

function bindImageFallbacks(root = document) {
  const scopedRoot = root instanceof Element || root instanceof Document ? root : document;
  const images = scopedRoot.querySelectorAll("img");

  images.forEach((img) => {
    if (!(img instanceof HTMLImageElement) || img.dataset.fallbackBound === "true") return;
    img.dataset.fallbackBound = "true";

    const frame = img.closest(".card-media, .product-drawer-media");
    if (!(frame instanceof HTMLElement)) return;

    let fallback = frame.querySelector(".image-fallback");
    if (!(fallback instanceof HTMLElement)) {
      fallback = document.createElement("div");
      fallback.className = "image-fallback";
      fallback.textContent = "Image unavailable";
      frame.appendChild(fallback);
    }

    const showFallback = () => {
      frame.classList.add("has-image-error");
      img.alt = "Image unavailable";
    };

    const hideFallback = () => {
      frame.classList.remove("has-image-error");
    };

    img.addEventListener("error", showFallback);
    img.addEventListener("load", hideFallback);

    if (img.complete && img.naturalWidth === 0) {
      showFallback();
    }
  });
}

function safeJsonParse(value, fallback) {
  try {
    return JSON.parse(value) || fallback;
  } catch {
    return fallback;
  }
}

function getStoredTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  return saved === "dark" ? "dark" : "light";
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark-theme", isDark);
}

function setupThemeToggle() {
  const navLinks = document.querySelector(".nav-links");
  if (!navLinks) return;

  let button = navLinks.querySelector("[data-theme-toggle]");
  if (!button) {
    button = document.createElement("button");
    button.type = "button";
    button.className = "theme-toggle";
    button.setAttribute("data-theme-toggle", "true");
    navLinks.appendChild(button);
  }

  const syncLabel = () => {
    const isDark = document.body.classList.contains("dark-theme");
    button.textContent = isDark ? "Light Mode" : "Dark Mode";
  };

  syncLabel();

  button.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark-theme") ? "light" : "dark";
    localStorage.setItem(THEME_KEY, nextTheme);
    applyTheme(nextTheme);
    syncLabel();
  });
}

async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    method: options.method || "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    body: options.body ? JSON.stringify(options.body) : undefined
  });

  let payload = {};
  try {
    payload = await response.json();
  } catch {
    payload = {};
  }

  if (!response.ok) {
    const error = new Error(payload.error || "Request failed");
    error.status = response.status;
    throw error;
  }

  return payload;
}

async function loadInventoryFromServer() {
  try {
    const data = await apiRequest("/products");
    const products = Array.isArray(data?.products) ? data.products : [];
    if (products.length) {
      setInventory(
        products.map((item) => ({
          id: String(item.id || ""),
          title: String(item.title || ""),
          category: String(item.category || ""),
          image: String(item.image || ""),
          note: String(item.note || ""),
          fit: item.fit ? String(item.fit) : ""
        }))
      );
      return;
    }
  } catch {
    // Use fallback inventory when backend is unavailable.
  }

  setInventory([...defaultInventory]);
}

function getSession() {
  return safeJsonParse(localStorage.getItem(SESSION_KEY), null);
}

function saveSession(session) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

async function refreshSessionFromServer() {
  try {
    const data = await apiRequest("/auth/me");
    if (data?.user) {
      saveSession(data.user);
      return data.user;
    }
    clearSession();
    return null;
  } catch (error) {
    if (error.status === 401) {
      clearSession();
      return null;
    }
    return getSession();
  }
}

function getCart() {
  return safeJsonParse(localStorage.getItem(CART_KEY), []);
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function getWishlist() {
  return safeJsonParse(localStorage.getItem(WISHLIST_KEY), []);
}

function saveWishlist(nextList) {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(nextList));
}

function getWishlistIds() {
  if (!getSession()) return [];
  if (Array.isArray(wishlistIds)) return wishlistIds;
  return getWishlist();
}

function getWishlistCount() {
  const session = getSession();
  if (!session) return 0;
  return getWishlistIds().length;
}

function setPendingWishlist(productId) {
  const payload = { id: productId, returnUrl: getCurrentPagePath() };
  localStorage.setItem(WISHLIST_PENDING_KEY, JSON.stringify(payload));
}

async function applyPendingWishlist() {
  const session = getSession();
  if (!session) return;
  const pending = safeJsonParse(localStorage.getItem(WISHLIST_PENDING_KEY), null);
  if (!pending?.id) return;
  if (!isWishlisted(pending.id)) {
    await addWishlistItem(pending.id, { silent: true });
  }
  localStorage.removeItem(WISHLIST_PENDING_KEY);
}

function isWishlisted(productId) {
  const session = getSession();
  if (!session) return false;
  return getWishlistIds().includes(productId);
}

async function loadWishlistFromServer() {
  if (!getSession()) {
    wishlistIds = [];
    return;
  }
  try {
    const data = await apiRequest("/wishlist");
    const items = Array.isArray(data?.items) ? data.items : [];
    wishlistIds = items.map((item) => String(item.productId || item.product_id || item.id || ""));
    wishlistIds = wishlistIds.filter(Boolean);
    saveWishlist(wishlistIds);
  } catch (error) {
    if (!wishlistSyncWarned && error?.status === 404) {
      wishlistSyncWarned = true;
      showToast("Wishlist sync unavailable. Backend update needed.");
    }
    wishlistIds = getWishlist();
  }
}

async function addWishlistItem(productId, { silent = false } = {}) {
  if (!getSession()) return false;
  try {
    await apiRequest("/wishlist", {
      method: "POST",
      body: { productId }
    });
    if (!wishlistIds) wishlistIds = getWishlist();
    if (!wishlistIds.includes(productId)) wishlistIds.push(productId);
    saveWishlist(wishlistIds);
    if (!silent) showToast("Added to wishlist.");
    renderWishlistNav();
    return true;
  } catch {
    if (!silent) showToast("Could not update wishlist.");
    return false;
  }
}

async function removeWishlistItem(productId, { silent = false } = {}) {
  if (!getSession()) return false;
  try {
    await apiRequest(`/wishlist/${productId}`, { method: "DELETE" });
    const nextList = getWishlistIds().filter((id) => id !== productId);
    wishlistIds = nextList;
    saveWishlist(nextList);
    if (!silent) showToast("Removed from wishlist.");
    renderWishlistNav();
    return true;
  } catch {
    if (!silent) showToast("Could not update wishlist.");
    return false;
  }
}

async function toggleWishlist(productId) {
  if (isWishlisted(productId)) {
    return await removeWishlistItem(productId);
  }
  return await addWishlistItem(productId);
}

function getWishlistModal() {
  let modal = document.querySelector(".wishlist-modal");
  if (modal) return modal;

  modal = document.createElement("div");
  modal.className = "wishlist-modal";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="wishlist-backdrop" data-wishlist-close="true"></div>
    <aside class="wishlist-panel" role="dialog" aria-modal="true" aria-label="Wishlist">
      <div class="wishlist-header">
        <h3>Wishlist</h3>
        <button class="wishlist-close" type="button" data-wishlist-close="true" aria-label="Close wishlist">X</button>
      </div>
      <div class="wishlist-body"></div>
    </aside>
  `;
  document.body.appendChild(modal);
  return modal;
}

function renderWishlistModal() {
  const modal = getWishlistModal();
  const body = modal.querySelector(".wishlist-body");
  if (!(body instanceof HTMLElement)) return;

  const items = getWishlistIds()
    .map((id) => productMap.get(id))
    .filter(Boolean);

  if (!items.length) {
    body.innerHTML = `<div class="empty">No items in wishlist yet.</div>`;
    return;
  }

  body.innerHTML = items
    .map(
      (item) => `
      <article class="wishlist-item">
        <img src="${item.image}" alt="${item.title}" />
        <div>
          <h4>${item.title}</h4>
          <p>${item.category}</p>
        </div>
        <button class="wishlist-remove-btn" type="button" data-wishlist-remove="${item.id}" aria-label="Remove from wishlist">
          <img src="images/delete.png" alt="" aria-hidden="true" />
        </button>
      </article>
    `
    )
    .join("");
}

function openWishlistModal() {
  const modal = getWishlistModal();
  renderWishlistModal();
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeWishlistModal() {
  const modal = document.querySelector(".wishlist-modal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function renderWishlistNav() {
  const navLinks = document.querySelector(".nav-links");
  const session = getSession();
  const count = getWishlistCount();
  if (navLinks) {
    const link = navLinks.querySelector("[data-wishlist-link]");
    if (link) link.remove();
  }
  if (!session) {
    document.querySelectorAll("[data-wishlist-count]").forEach((badge) => {
      badge.textContent = "0";
    });
    return;
  }
  document.querySelectorAll("[data-wishlist-count]").forEach((badgeEl) => {
    badgeEl.textContent = String(count);
  });
}

function updateCartBadge() {
  const count = getCartCount();
  document.querySelectorAll("[data-cart-count]").forEach((badge) => {
    badge.textContent = String(count);
    badge.classList.toggle("visible", count > 0);
  });
}

function renderAuthNav() {
  const navLinks = document.querySelector(".nav-links");
  if (!navLinks) return;

  const session = getSession();
  let adminLink = navLinks.querySelector("[data-admin-link]");
  let authLink = navLinks.querySelector("[data-auth-link]");
  let logoutBtn = navLinks.querySelector("[data-logout-btn]");

  if (!adminLink) {
    adminLink = document.createElement("a");
    adminLink.setAttribute("data-admin-link", "true");
    adminLink.textContent = "Admin";
  }

  if (!authLink) {
    authLink = document.createElement("a");
    authLink.setAttribute("data-auth-link", "true");
    navLinks.appendChild(authLink);
  }

  if (adminLink.parentElement) adminLink.remove();

  if (session) {
    if (authLink.parentElement) authLink.remove();
    if (logoutBtn) logoutBtn.remove();
  } else {
    authLink.href = getLoginUrl();
    authLink.textContent = "Login";
    if (logoutBtn) logoutBtn.remove();
    if (!authLink.parentElement) {
      const themeToggle = navLinks.querySelector("[data-theme-toggle]");
      if (themeToggle) {
        navLinks.insertBefore(authLink, themeToggle);
      } else {
        navLinks.appendChild(authLink);
      }
    }
  }

  renderWishlistNav();
  renderUserIcon();
}

function setupMobileNavMenu() {
  const topNav = document.querySelector(".top-nav");
  const navLinks = topNav?.querySelector(".nav-links");
  if (!topNav || !navLinks) return;

  let toggle = topNav.querySelector(".nav-toggle");
  if (!toggle) {
    toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "nav-toggle";
    toggle.textContent = "Menu";
    toggle.setAttribute("aria-expanded", "false");
    topNav.insertBefore(toggle, navLinks);
  }

  toggle.addEventListener("click", () => {
    const open = topNav.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  navLinks.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (!target.closest("a, [data-theme-toggle]")) return;
    if (!topNav.classList.contains("menu-open")) return;
    topNav.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
  });
}

function addToCart(productId) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }
  saveCart(cart);
}

function changeQty(productId, delta) {
  const cart = getCart();
  const index = cart.findIndex((item) => item.id === productId);
  if (index === -1) return;
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart(cart);
  renderCartPage();
  renderCheckoutSummary();
}

function removeItem(productId) {
  const nextCart = getCart().filter((item) => item.id !== productId);
  saveCart(nextCart);
  renderCartPage();
  renderCheckoutSummary();
}

function getCartDetailed() {
  return getCart()
    .map((line) => {
      const product = productMap.get(line.id);
      if (!product) return null;
      return {
        ...line,
        product
      };
    })
    .filter(Boolean);
}

function renderFilters() {
  if (!filters) return;
  filters.innerHTML = "";
  getCategories().forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat === "All" ? " active" : "");
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderCards(cat);
    });
    filters.appendChild(btn);
  });

  setupProductTools();
}

function setupProductTools() {
  if (!grid) return;
  const toolbar = document.querySelector(".toolbar");
  if (!toolbar) return;

  let tools = toolbar.querySelector(".product-tools");
  if (!tools) {
    tools = document.createElement("div");
    tools.className = "product-tools";
    tools.innerHTML = `
      <input type="search" id="productSearch" placeholder="Search products..." aria-label="Search products" />
      <select id="productSort" aria-label="Sort products">
        <option value="default">Sort: Default</option>
        <option value="az">Sort: A to Z</option>
        <option value="za">Sort: Z to A</option>
      </select>
    `;
    toolbar.appendChild(tools);

    const searchInput = tools.querySelector("#productSearch");
    const sortSelect = tools.querySelector("#productSort");

    if (searchInput instanceof HTMLInputElement) {
      searchInput.addEventListener("input", () => {
        searchQuery = searchInput.value.trim().toLowerCase();
        renderCards(activeCategory);
      });
    }

    if (sortSelect instanceof HTMLSelectElement) {
      sortSelect.addEventListener("change", () => {
        sortMode = sortSelect.value || "default";
        renderCards(activeCategory);
      });
    }
  }
}

function getQuickInquiryUrl(item) {
  const text = `Hello Dhruv Dental Depot, I want details for ${item.title} (${item.category}).`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function showToast(message) {
  if (!message) return;
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

function getConfirmModal() {
  let modal = document.querySelector(".confirm-modal");
  if (modal) return modal;

  modal = document.createElement("div");
  modal.className = "confirm-modal";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="confirm-backdrop" data-confirm-cancel="true"></div>
    <div class="confirm-panel" role="dialog" aria-modal="true" aria-label="Confirm logout">
      <h3 id="confirmTitle">Confirm Logout</h3>
      <p id="confirmMessage"></p>
      <div class="confirm-actions">
        <button class="ghost" type="button" data-confirm-cancel="true">Cancel</button>
        <button class="primary" type="button" data-confirm-yes="true">Yes, Logout</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  return modal;
}

function showConfirmLogout(message) {
  const modal = getConfirmModal();
  const messageEl = modal.querySelector("#confirmMessage");
  const yesBtn = modal.querySelector("[data-confirm-yes]");
  const cancelButtons = modal.querySelectorAll("[data-confirm-cancel]");

  if (messageEl) messageEl.textContent = message;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  return new Promise((resolve) => {
    const cleanup = () => {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
      yesBtn?.removeEventListener("click", onYes);
      cancelButtons.forEach((btn) => btn.removeEventListener("click", onCancel));
      document.removeEventListener("keydown", onKeydown);
    };

    const onYes = () => {
      cleanup();
      resolve(true);
    };

    const onCancel = () => {
      cleanup();
      resolve(false);
    };

    const onKeydown = (event) => {
      if (event.key === "Escape") onCancel();
    };

    yesBtn?.addEventListener("click", onYes);
    cancelButtons.forEach((btn) => btn.addEventListener("click", onCancel));
    document.addEventListener("keydown", onKeydown);
  });
}

let productDrawer = null;
let drawerLockUntil = 0;
let userDrawer = null;
let userDrawerAnchor = null;

function getProductDrawer() {
  if (productDrawer) return productDrawer;

  const drawer = document.createElement("div");
  drawer.className = "product-drawer";
  drawer.setAttribute("aria-hidden", "true");
  drawer.innerHTML = `
    <div class="product-drawer-backdrop" data-drawer-close="true"></div>
    <aside class="product-drawer-panel" role="dialog" aria-modal="true" aria-label="Product details">
      <button class="product-drawer-close" type="button" data-drawer-close="true" aria-label="Close details">X</button>
      <div class="product-drawer-content"></div>
    </aside>
  `;

  drawer.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.closest(".product-drawer-backdrop") || target.closest(".product-drawer-close")) {
      closeProductDrawer();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeProductDrawer();
  });

  document.body.appendChild(drawer);
  productDrawer = drawer;
  return drawer;
}

function openProductDrawer(productId) {
  const product = productMap.get(productId);
  if (!product) return;

  const drawer = getProductDrawer();
  const content = drawer.querySelector(".product-drawer-content");
  if (!(content instanceof HTMLElement)) return;

  const fitClass = product.fit === "contain" ? "fit-contain" : "";
  const noteHtml = product.note ? `<p class="product-drawer-note">${product.note}</p>` : "";
  const wishlisted = isWishlisted(productId);
  const wishlistLabel = wishlisted ? "Wishlisted" : "Add to Wishlist";
  const wishlistState = wishlisted ? " active" : "";
  content.innerHTML = `
    <div class="product-drawer-media">
      <img src="${product.image}" alt="${product.title}" class="${fitClass}" />
      <div class="image-fallback">Image unavailable</div>
    </div>
    <div class="product-drawer-info">
      ${getBreadcrumbHtml([
        { label: "Home", href: "index.html" },
        { label: product.category, href: getCategoryPageHref(product.category) },
        { label: product.title }
      ], "breadcrumb-inline")}
      <span class="tag">${product.category}</span>
      <h3>${product.title}</h3>
      ${noteHtml}
      <p class="product-drawer-copy">For pricing, stock status, and compatibility details, contact us directly.</p>
      <div class="product-drawer-actions">
        <a class="primary" href="${getQuickInquiryUrl(product)}" target="_blank" rel="noopener noreferrer">Quick Inquiry</a>
        <button class="ghost wishlist-btn${wishlistState}" data-wishlist-id="${productId}" type="button">
          <span class="wishlist-icon" aria-hidden="true">♡</span>
          <span class="wishlist-text">${wishlistLabel}</span>
        </button>
      </div>
    </div>
  `;

  bindImageFallbacks(content);

  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
}

function closeProductDrawer() {
  if (Date.now() < drawerLockUntil) return;
  if (!productDrawer) return;
  productDrawer.classList.remove("open");
  productDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
}

function getUserDrawer() {
  if (userDrawer) return userDrawer;

  const drawer = document.createElement("div");
  drawer.className = "user-drawer";
  drawer.setAttribute("aria-hidden", "true");
  drawer.innerHTML = `
    <div class="user-drawer-backdrop" data-user-drawer-close="true"></div>
    <aside class="user-drawer-panel" role="dialog" aria-modal="true" aria-label="Account">
      <div class="user-drawer-handle" aria-hidden="true"></div>
      <button class="user-drawer-close" type="button" data-user-drawer-close="true" aria-label="Close account">X</button>
      <div class="user-drawer-content"></div>
    </aside>
  `;

  document.body.appendChild(drawer);
  userDrawer = drawer;
  window.addEventListener("resize", positionUserDrawer);
  window.addEventListener("scroll", positionUserDrawer, true);
  return drawer;
}

async function openUserDrawer(anchor) {
  let session = getSession();
  if (!session) {
    session = await refreshSessionFromServer();
  }
  if (!session) {
    showToast("Please login to view account options.");
    window.location.href = getLoginUrl();
    return;
  }
  const drawer = getUserDrawer();
  if (anchor instanceof HTMLElement) {
    userDrawerAnchor = anchor;
  }
  const content = drawer.querySelector(".user-drawer-content");
  if (content instanceof HTMLElement) {
    const name = session.name || "there";
    const isDentist = String(session.profession || "").toLowerCase() === "dentist";
    const greetingName = isDentist ? `Dr. ${name}` : name;
    const count = getWishlistCount();
    content.innerHTML = `
      <h3>Hi, ${greetingName}</h3>
      <p>Manage your account options below.</p>
      <a class="ghost profile-link" href="profile.html">Profile</a>
      <div class="user-drawer-actions">
        ${
          count
            ? `<button class="nav-btn wishlist-link" type="button" data-wishlist-link="true">
                Wishlist <span class="wishlist-count" data-wishlist-count>${count}</span>
              </button>`
            : ""
        }
        <button class="primary" type="button" data-logout-btn="true">Logout</button>
      </div>
    `;
  }
  renderWishlistNav();
  positionUserDrawer();
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("user-drawer-open");
}

function closeUserDrawer() {
  if (!userDrawer) return;
  userDrawer.classList.remove("open");
  userDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("user-drawer-open");
}

function positionUserDrawer() {
  if (!userDrawer || !userDrawerAnchor) return;
  const panel = userDrawer.querySelector(".user-drawer-panel");
  if (!(panel instanceof HTMLElement)) return;
  const rect = userDrawerAnchor.getBoundingClientRect();
  const panelWidth = Math.min(280, window.innerWidth - 24);
  const panelHeight = panel.offsetHeight || 160;
  const spacing = 10;
  const top = Math.min(
    window.innerHeight - panelHeight - spacing,
    rect.bottom + spacing
  );
  const left = Math.max(
    12,
    Math.min(window.innerWidth - panelWidth - 12, rect.right - panelWidth)
  );
  panel.style.width = `${panelWidth}px`;
  panel.style.top = `${Math.max(spacing, top)}px`;
  panel.style.left = `${left}px`;
}

function renderUserIcon() {
  const topNav = document.querySelector(".top-nav");
  const navLinks = topNav?.querySelector(".nav-links");
  if (!topNav || !navLinks) return;

  const session = getSession();
  let btn = topNav.querySelector("[data-user-drawer-btn]");

  if (!session) {
    if (btn) btn.remove();
    return;
  }

  if (!btn) {
    btn = document.createElement("button");
    btn.type = "button";
    btn.className = "user-icon-btn";
    btn.setAttribute("data-user-drawer-btn", "true");
    btn.setAttribute("aria-label", "Open account options");
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 12c2.49 0 4.5-2.01 4.5-4.5S14.49 3 12 3 7.5 5.01 7.5 7.5 9.51 12 12 12zm0 2.25c-3 0-9 1.5-9 4.5v1.5h18v-1.5c0-3-6-4.5-9-4.5z"/>
      </svg>
    `;
  }
  if (btn.dataset.bound !== "true") {
    btn.dataset.bound = "true";
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openUserDrawer(btn);
    });
  }

  const navToggle = topNav.querySelector(".nav-toggle");
  const anchor = navToggle || navLinks;
  if (btn.parentElement !== topNav || btn.nextElementSibling !== anchor) {
    topNav.insertBefore(btn, anchor);
  }
}

function renderCards(category) {
  if (!grid) return;
  activeCategory = category || activeCategory;
  let data = activeCategory === "All" ? [...inventory] : inventory.filter((item) => item.category === activeCategory);

  if (searchQuery) {
    data = data.filter((item) => {
      const inTitle = item.title.toLowerCase().includes(searchQuery);
      const inCategory = item.category.toLowerCase().includes(searchQuery);
      const inNote = (item.note || "").toLowerCase().includes(searchQuery);
      return inTitle || inCategory || inNote;
    });
  }

  if (sortMode === "az") {
    data.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortMode === "za") {
    data.sort((a, b) => b.title.localeCompare(a.title));
  }

  grid.innerHTML = "";

  if (data.length === 0) {
    setGridState("empty", "No products found.");
    return;
  }

  data.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "card";
    card.style.animationDelay = `${index * 0.04}s`;

    const fitClass = item.fit === "contain" ? "fit-contain" : "";
    const noteHtml = item.note ? `<p>${item.note}</p>` : "";
    card.innerHTML = `
      <div class="card-media">
        <img src="${item.image}" alt="${item.title}" class="${fitClass}" />
        <div class="image-fallback">Image unavailable</div>
      </div>
      <div class="card-body">
        <h4>${item.title}</h4>
        ${noteHtml}
        <div class="card-actions">
          <button class="ghost details-btn" data-details-id="${item.id}" type="button">
            <span class="action-text">View Details</span>
            <img class="action-icon" src="images/viewdetails.png" alt="View details" />
          </button>
          <button class="primary add-cart-btn" data-id="${item.id}" type="button">Add to Cart</button>
          <a class="ghost quick-inquiry-btn" href="${getQuickInquiryUrl(item)}" target="_blank" rel="noopener noreferrer">
            <span class="action-text">Quick Inquiry</span>
            <img class="action-icon" src="images/inquiry.png" alt="Quick inquiry" />
          </a>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  bindImageFallbacks(grid);
}

function renderCartPage() {
  const cartItemsRoot = document.getElementById("cartItems");
  const cartTotalCount = document.getElementById("cartTotalCount");
  const checkoutBtn = document.getElementById("goCheckout");

  if (!cartItemsRoot) return;

  const detailed = getCartDetailed();
  cartItemsRoot.innerHTML = "";

  if (detailed.length === 0) {
    cartItemsRoot.innerHTML = `<div class="empty">Your cart is empty.</div>`;
    if (cartTotalCount) cartTotalCount.textContent = "0";
    if (checkoutBtn) {
      checkoutBtn.setAttribute("aria-disabled", "true");
      checkoutBtn.href = "#";
    }
    return;
  }

  detailed.forEach((line) => {
    const row = document.createElement("article");
    row.className = "cart-item";
    row.innerHTML = `
      <img src="${line.product.image}" alt="${line.product.title}" />
      <div>
        <h4>${line.product.title}</h4>
        <p>${line.product.category}</p>
      </div>
      <div class="qty-group">
        <button type="button" data-action="minus" data-id="${line.id}">-</button>
        <span>${line.qty}</span>
        <button type="button" data-action="plus" data-id="${line.id}">+</button>
      </div>
      <button class="ghost small" type="button" data-action="remove" data-id="${line.id}">Remove</button>
    `;
    cartItemsRoot.appendChild(row);
  });

  const totalCount = detailed.reduce((sum, line) => sum + line.qty, 0);
  if (cartTotalCount) cartTotalCount.textContent = String(totalCount);
  if (checkoutBtn) {
    if (DISABLE_CHECKOUT) {
      checkoutBtn.href = "#";
      checkoutBtn.textContent = "Ordering Disabled";
      checkoutBtn.setAttribute("aria-disabled", "true");
      return;
    }
    const loggedIn = Boolean(getSession());
    checkoutBtn.href = loggedIn ? "checkout.html" : "login.html?next=checkout.html";
    checkoutBtn.textContent = loggedIn ? "Proceed to Checkout" : "Login to Checkout";
    checkoutBtn.removeAttribute("aria-disabled");
  }
}

function renderCheckoutSummary() {
  const summaryRoot = document.getElementById("orderSummary");
  if (!summaryRoot) return;

  const detailed = getCartDetailed();
  if (detailed.length === 0) {
    summaryRoot.innerHTML = `<div class="empty">Your cart is empty. Add products before checkout.</div>`;
    return;
  }

  summaryRoot.innerHTML = detailed
    .map((line) => `<li>${line.product.title} <strong>x ${line.qty}</strong></li>`)
    .join("");
}

async function requireAuthForCheckout() {
  const needsAuth = document.body?.dataset?.requiresAuth === "true";
  if (!needsAuth) return true;
  if (getSession()) return true;
  const user = await refreshSessionFromServer();
  if (user) return true;
  window.location.href = getLoginUrl();
  return false;
}

function handleCheckoutSubmit() {
  const form = document.getElementById("checkoutForm");
  const status = document.getElementById("checkoutStatus");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const detailed = getCartDetailed();
    if (detailed.length === 0) {
      if (status) status.textContent = "Your cart is empty. Add products before placing order.";
      return;
    }

    const currentUser = (await refreshSessionFromServer()) || getSession();
    if (!currentUser) {
      window.location.href = getLoginUrl();
      return;
    }

    const formData = new FormData(form);
    const payload = {
      customer: {
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        address: formData.get("address"),
        city: formData.get("city"),
        state: formData.get("state"),
        pinCode: formData.get("pinCode"),
        note: formData.get("note")
      },
      items: detailed.map((line) => ({
        id: line.id,
        title: line.product.title,
        category: line.product.category,
        qty: line.qty
      }))
    };

    try {
      const data = await apiRequest("/orders", {
        method: "POST",
        body: payload
      });

      const orderId = data?.order?.id || "N/A";
      saveCart([]);
      form.reset();
      renderCheckoutSummary();

      if (status) {
        status.textContent = `Order placed successfully. Your order ID is ${orderId}.`;
      }
    } catch (error) {
      if (status) {
        status.textContent = error.message || "Could not place order. Please try again.";
      }
    }
  });
}

async function setupAuthPage() {
  const form = document.getElementById("authForm");
  const status = document.getElementById("authStatus");
  if (!form) return;

  const passwordField = form.querySelector(".password-field input[name='password']");
  const passwordToggle = form.querySelector(".password-toggle");
  if (passwordField instanceof HTMLInputElement && passwordToggle instanceof HTMLButtonElement) {
    passwordToggle.addEventListener("click", () => {
      const isHidden = passwordField.type === "password";
      passwordField.type = isHidden ? "text" : "password";
      passwordToggle.textContent = isHidden ? "Hide" : "Show";
      passwordToggle.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
    });
  }

  const params = new URLSearchParams(window.location.search);
  const fallbackNext = getReturnUrlFromReferrer() || "index.html";
  const next = normalizeNextUrl(params.get("next") || fallbackNext);
  const googleBtn = document.getElementById("googleLoginBtn");
  if (googleBtn instanceof HTMLAnchorElement) {
    googleBtn.href = `${API_BASE}/auth/google?next=${encodeURIComponent(next)}`;
  }

  const existing = (await refreshSessionFromServer()) || getSession();
  if (existing) {
    window.location.href = next;
    return;
  }

  let selectedAction = "login";
  form.querySelectorAll("button[name='action']").forEach((button) => {
    button.addEventListener("click", () => {
      selectedAction = String(button.value || "login");
    });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const submitter = event.submitter;
    const action =
      (submitter instanceof HTMLButtonElement && submitter.value) ||
      selectedAction ||
      String(formData.get("action") || "login");
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim().toLowerCase();
    const password = String(formData.get("password") || "");

    if (!email || !password) {
      if (status) status.textContent = "Email and password are required.";
      return;
    }

    try {
      let data;
      if (action === "register") {
        if (!name) {
          if (status) status.textContent = "Name is required for registration.";
          return;
        }
        data = await apiRequest("/auth/register", {
          method: "POST",
          body: { name, email, password }
        });
      } else {
        data = await apiRequest("/auth/login", {
          method: "POST",
          body: { email, password }
        });
      }

      if (data?.user) {
        saveSession(data.user);
      }
      if (action === "register") {
        showToast("Account created successfully.");
      } else {
        showToast("Logged in successfully.");
      }
      await loadWishlistFromServer();
      await applyPendingWishlist();
      renderWishlistNav();
      setTimeout(() => {
        window.location.href = next;
      }, 900);
    } catch (error) {
      if (status) status.textContent = error.message || "Authentication failed.";
    }
  });
}

async function setupProfilePage() {
  const form = document.getElementById("profileForm");
  const status = document.getElementById("profileStatus");
  if (!form) return;

  let session = (await refreshSessionFromServer()) || getSession();
  if (!session) {
    window.location.href = getLoginUrl();
    return;
  }

  const nameInput = form.querySelector("input[name='name']");
  const emailInput = form.querySelector("input[name='email']");
  if (nameInput instanceof HTMLInputElement) nameInput.value = session.name || "";
  if (emailInput instanceof HTMLInputElement) emailInput.value = session.email || "";
  const professionInput = form.querySelector("select[name='profession']");
  if (professionInput instanceof HTMLSelectElement) {
    professionInput.value = (session.profession || "").toLowerCase();
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const nextName = nameInput instanceof HTMLInputElement ? nameInput.value.trim() : "";
    const nextProfession = professionInput instanceof HTMLSelectElement
      ? professionInput.value.trim()
      : "";
    if (!nextName) {
      if (status) status.textContent = "Name is required.";
      return;
    }
    if (!nextProfession) {
      if (status) status.textContent = "Profession is required.";
      return;
    }

    try {
      const data = await apiRequest("/auth/profile", {
        method: "PUT",
        body: { name: nextName, profession: nextProfession }
      });
      if (data?.user) {
        saveSession(data.user);
        renderAuthNav();
      }
      if (status) status.textContent = "Profile updated successfully.";
      showToast("Profile updated.");
    } catch (error) {
      if (status) status.textContent = error.message || "Could not update profile.";
    }
  });
}

async function setupAdminPage() {
  const adminForm = document.getElementById("productForm");
  const adminList = document.getElementById("productList");
  const adminStatus = document.getElementById("adminStatus");
  if (!adminForm || !adminList) return;

  const session = (await refreshSessionFromServer()) || getSession();
  if (!session) {
    window.location.href = "login.html?next=admin-products.html";
    return;
  }

  async function renderAdminProducts() {
    try {
      const data = await apiRequest("/products");
      const products = Array.isArray(data?.products) ? data.products : [];
      adminList.innerHTML = "";

      if (!products.length) {
        adminList.innerHTML = `<div class="empty">No products in database yet.</div>`;
        return;
      }

      products.forEach((item) => {
        const row = document.createElement("article");
        row.className = "cart-item";
        row.innerHTML = `
          <img src="${item.image}" alt="${item.title}" />
          <div>
            <h4>${item.title}</h4>
            <p>${item.category}</p>
          </div>
          <div></div>
          <button class="ghost small" type="button" data-delete-product="${item.id}">Delete</button>
        `;
        adminList.appendChild(row);
      });
    } catch (error) {
      adminList.innerHTML = `<div class="empty">Could not load products.</div>`;
      if (adminStatus) adminStatus.textContent = error.message || "Failed loading products.";
    }
  }

  adminForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(adminForm);
    const payload = {
      title: String(formData.get("title") || "").trim(),
      category: String(formData.get("category") || "").trim(),
      image: String(formData.get("image") || "").trim(),
      note: String(formData.get("note") || "").trim(),
      fit: String(formData.get("fit") || "").trim()
    };

    if (!payload.title || !payload.category || !payload.image) {
      if (adminStatus) adminStatus.textContent = "Title, category and image are required.";
      return;
    }

    try {
      await apiRequest("/products", {
        method: "POST",
        body: payload
      });
      adminForm.reset();
      if (adminStatus) adminStatus.textContent = "Product added.";
      await renderAdminProducts();
      await loadInventoryFromServer();
    } catch (error) {
      if (adminStatus) adminStatus.textContent = error.message || "Could not add product.";
    }
  });

  adminList.addEventListener("click", async (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const button = target.closest("[data-delete-product]");
    if (!button) return;
    const id = button.getAttribute("data-delete-product");
    if (!id) return;

    try {
      await apiRequest(`/products/${id}`, { method: "DELETE" });
      if (adminStatus) adminStatus.textContent = "Product deleted.";
      await renderAdminProducts();
      await loadInventoryFromServer();
    } catch (error) {
      if (adminStatus) adminStatus.textContent = error.message || "Could not delete product.";
    }
  });

  await renderAdminProducts();
}

let imageLightbox = null;

function isPhoneViewport() {
  return window.matchMedia("(max-width: 720px)").matches;
}

function getImageLightbox() {
  if (imageLightbox) return imageLightbox;

  const overlay = document.createElement("div");
  overlay.className = "image-lightbox";
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML = `
    <button type="button" class="image-lightbox-close" aria-label="Close image preview">X</button>
    <img src="" alt="" />
  `;

  overlay.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.classList.contains("image-lightbox") || target.classList.contains("image-lightbox-close")) {
      closeImageLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeImageLightbox();
  });

  document.body.appendChild(overlay);
  imageLightbox = overlay;
  return overlay;
}

function openImageLightbox(src, alt) {
  if (!isPhoneViewport()) return;
  const overlay = getImageLightbox();
  const img = overlay.querySelector("img");
  if (!(img instanceof HTMLImageElement)) return;

  img.src = src;
  img.alt = alt || "Product image";
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
}

function closeImageLightbox() {
  if (!imageLightbox) return;
  imageLightbox.classList.remove("open");
  imageLightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
}

function setupCartInteractions() {
  if (grid) {
    grid.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const detailsBtn = target.closest(".details-btn");
      if (detailsBtn instanceof HTMLElement) {
        const detailsId = detailsBtn.getAttribute("data-details-id");
        if (detailsId) openProductDrawer(detailsId);
        return;
      }
      const image = target.closest(".card-media img");
      if (image instanceof HTMLImageElement) {
        openImageLightbox(image.currentSrc || image.src, image.alt);
        return;
      }
      const btn = target.closest(".add-cart-btn");
      if (!btn) return;

      const productId = btn.getAttribute("data-id");
      if (!productId) return;

      addToCart(productId);
      const original = btn.textContent;
      btn.textContent = "Added";
      setTimeout(() => {
        btn.textContent = original || "Add to Cart";
      }, 700);
    });
  }

  const cartItemsRoot = document.getElementById("cartItems");
  if (cartItemsRoot) {
    cartItemsRoot.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const button = target.closest("button[data-action]");
      if (!button) return;

      const action = button.getAttribute("data-action");
      const id = button.getAttribute("data-id");
      if (!action || !id) return;

      if (action === "plus") changeQty(id, 1);
      if (action === "minus") changeQty(id, -1);
      if (action === "remove") removeItem(id);
    });
  }

  document.addEventListener("click", async (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const userDrawerBtn = target.closest("[data-user-drawer-btn]");
    if (userDrawerBtn) {
      openUserDrawer();
      return;
    }

    const userDrawerClose = target.closest("[data-user-drawer-close]");
    if (userDrawerClose) {
      closeUserDrawer();
      return;
    }

    const wishlistLink = target.closest("[data-wishlist-link]");
    if (wishlistLink) {
      closeUserDrawer();
      openWishlistModal();
      return;
    }

    const wishlistClose = target.closest("[data-wishlist-close]");
    if (wishlistClose) {
      closeWishlistModal();
      return;
    }

    const wishlistRemove = target.closest("[data-wishlist-remove]");
    if (wishlistRemove instanceof HTMLElement) {
      const id = wishlistRemove.getAttribute("data-wishlist-remove");
      if (!id) return;
      await removeWishlistItem(id);
      renderWishlistModal();
      if (!getWishlistCount()) closeWishlistModal();
      return;
    }
    const wishlistBtn = target.closest("[data-wishlist-id]");
    if (wishlistBtn instanceof HTMLElement) {
      event.preventDefault();
      event.stopPropagation();
      const session = getSession();
      if (!session) {
        const id = wishlistBtn.getAttribute("data-wishlist-id");
        if (id) setPendingWishlist(id);
        window.location.href = getLoginUrl();
        return;
      }
      const id = wishlistBtn.getAttribute("data-wishlist-id");
      if (!id) return;
      const nowWishlisted = await toggleWishlist(id);
      const textEl = wishlistBtn.querySelector(".wishlist-text");
      if (textEl) textEl.textContent = nowWishlisted ? "Wishlisted" : "Add to Wishlist";
      wishlistBtn.classList.toggle("active", nowWishlisted);
      drawerLockUntil = Date.now() + 500;
      openProductDrawer(id);
      return;
    }
    if (!target.closest("[data-logout-btn]")) return;
    closeUserDrawer();
    const session = getSession();
    const name = session?.name ? ` ${session.name}` : "";
    const ok = await showConfirmLogout(`Hi${name}, are you sure you want to logout?`);
    if (!ok) return;
    try {
      await apiRequest("/auth/logout", { method: "POST" });
    } catch {
      // Ignore and clear local session anyway.
    }
    clearSession();
    wishlistIds = null;
    saveWishlist([]);
    closeUserDrawer();
    renderAuthNav();
    renderCartPage();
    showToast("User logged out successfully.");
    if (document.body?.dataset?.requiresAuth === "true") {
      window.location.href = "index.html";
    }
  });
}

function setupScrollReveal() {
  const targets = document.querySelectorAll(".hero, .section-title, .card, .cart-layout, .checkout-layout, .auth-card");
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
  );

  targets.forEach((el, index) => {
    el.classList.add("scroll-reveal");
    el.style.setProperty("--reveal-delay", `${Math.min(index * 35, 280)}ms`);
  });

  requestAnimationFrame(() => {
    targets.forEach((el) => observer.observe(el));
  });
}

function setupInstagramFollowButton() {
  const btn = document.getElementById("instagramFollowBtn");
  if (!(btn instanceof HTMLAnchorElement)) return;

  btn.addEventListener("click", (event) => {
    const isMobile = window.matchMedia("(max-width: 980px)").matches;
    if (!isMobile) return;

    event.preventDefault();

    const appProfileUrl = "instagram://user?username=dhruv_dental_depot";
    const appSearchUrl = "instagram://search?query=dhruv_dental_depot";
    const webUrl = "https://www.instagram.com/dhruv_dental_depot/";

    const searchFallback = setTimeout(() => {
      window.location.href = appSearchUrl;
    }, 650);

    const webFallback = setTimeout(() => {
      window.location.href = webUrl;
    }, 1500);

    const clearFallbacks = () => {
      clearTimeout(searchFallback);
      clearTimeout(webFallback);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };

    const onVisibilityChange = () => {
      if (!document.hidden) return;
      clearFallbacks();
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("pagehide", clearFallbacks, { once: true });

    window.location.href = appProfileUrl;
  });
}

function setupStickyContactBar() {
  if (document.querySelector(".sticky-contact-bar")) return;

  const bar = document.createElement("div");
  bar.className = "sticky-contact-bar";
  bar.innerHTML = `
    <a class="sticky-contact-item whatsapp" href="https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Dhruv%20Dental%20Depot" target="_blank" rel="noopener noreferrer">WhatsApp</a>
    <a class="sticky-contact-item call" href="tel:${CONTACT_PHONE}">Call</a>
  `;
  document.body.appendChild(bar);
}

function setupPriceListForm() {
  const form = document.getElementById("priceListForm");
  if (!(form instanceof HTMLFormElement)) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const city = String(formData.get("city") || "").trim();
    const businessType = String(formData.get("businessType") || "").trim();
    const requirements = String(formData.get("requirements") || "").trim();

    if (!name || !phone || !businessType) return;

    const messageLines = [
      "Hello Dhruv Dental Depot,",
      "I want to request a price list.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Business Type: ${businessType}`
    ];

    if (city) messageLines.push(`City: ${city}`);
    if (requirements) messageLines.push(`Requirements: ${requirements}`);

    const message = messageLines.join("\n");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    form.reset();
  });
}

async function bootstrap() {
  applyTheme(getStoredTheme());

  if (guardCheckoutPage()) return;

  if (pageCategory !== "All" && filters) {
    filters.style.display = "none";
  }

  const canLoad = await requireAuthForCheckout();
  if (!canLoad) return;

  setGridState("loading", "Loading products...");
  await loadInventoryFromServer();

  renderFilters();
  setupBreadcrumbs();
  renderCards(pageCategory);
  const session = await refreshSessionFromServer();
  if (session) {
    await loadWishlistFromServer();
    await applyPendingWishlist();
  } else {
    wishlistIds = [];
  }
  renderWishlistNav();
  renderCartPage();
  renderCheckoutSummary();
  setupCartInteractions();
  handleCheckoutSubmit();
  await setupAuthPage();
  await setupProfilePage();
  await setupAdminPage();
  updateCartBadge();
  renderAuthNav();
  setupThemeToggle();
  setupMobileNavMenu();
  setupScrollReveal();
  setupInstagramFollowButton();
  setupStickyContactBar();
  setupPriceListForm();

  if (session) {
    renderAuthNav();
    renderCartPage();
  }
}

bootstrap();



