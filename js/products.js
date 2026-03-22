const products = {};

const WHATSAPP_NUMBER = "919335485398";
const WISHLIST_KEY = "ddd_wishlist";
const WISHLIST_PENDING_KEY = "ddd_wishlist_pending";
const CATEGORY_PAGE_MAP = {
  "Dental Compressor Parts": "dental-compressor-parts.html",
  "Dental Chair Parts": "dental-chair-parts.html",
  "Dental Handpieces": "dental-handpieces.html",
  "Dental Scaler Parts": "dental-scaler-parts.html",
  Accessories: "accessories.html"
};

let wishlistIds = null;
let wishlistSyncWarned = false;
let backendDownNotified = false;

let inventory = [];
let productMap = new Map();
let activeCategory = "All";
let searchQuery = "";
let sortMode = "default";

let productDrawer = null;
let drawerLockUntil = 0;

const grid = document.getElementById("grid");
const filters = document.getElementById("filters");
const pageCategory = document.body?.dataset?.category || "All";

products.getCategories = function getCategories() {
  return ["All", ...new Set(inventory.map((item) => item.category))];
};

products.setInventory = function setInventory(nextInventory) {
  inventory = nextInventory;
  productMap = new Map(inventory.map((item) => [item.id, item]));
};

products.getInventory = function getInventory() {
  return inventory;
};

products.getProductById = function getProductById(id) {
  return productMap.get(id);
};

products.getProductMap = function getProductMap() {
  return productMap;
};

products.setDrawerLock = function setDrawerLock(ms) {
  drawerLockUntil = Date.now() + ms;
};

products.getCategoryPageHref = function getCategoryPageHref(category) {
  return CATEGORY_PAGE_MAP[category] || "#";
};

products.setGridState = function setGridState(kind, message) {
  if (!grid) return;
  const spinner = kind === "loading" ? `<span class="state-spinner" aria-hidden="true"></span>` : "";
  grid.innerHTML = `<div class="empty state-${kind}">${spinner}<span class="state-message">${message}</span></div>`;
};

products.setupBreadcrumbs = function setupBreadcrumbs() {
  if (pageCategory === "All") return;
  const main = document.querySelector("main");
  const toolbar = document.querySelector(".toolbar");
  if (!(main instanceof HTMLElement) || !(toolbar instanceof HTMLElement)) return;
  if (main.querySelector(".page-breadcrumb")) return;

  const breadcrumb = window.App?.ui?.getBreadcrumbHtml;
  if (!breadcrumb) return;
  toolbar.insertAdjacentHTML(
    "beforebegin",
    breadcrumb(
      [
        { label: "Home", href: "index.html" },
        { label: pageCategory }
      ],
      "page-breadcrumb"
    )
  );
};

products.getQuickInquiryUrl = function getQuickInquiryUrl(item) {
  const text = `Hello Dhruv Dental Depot, I want details for ${item.title} (${item.category}).`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

products.setupProductTools = function setupProductTools() {
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
        products.renderCards(activeCategory);
      });
    }

    if (sortSelect instanceof HTMLSelectElement) {
      sortSelect.addEventListener("change", () => {
        sortMode = sortSelect.value || "default";
        products.renderCards(activeCategory);
      });
    }
  }
};

products.renderFilters = function renderFilters() {
  if (!filters) return;
  filters.innerHTML = "";
  products.getCategories().forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat === "All" ? " active" : "");
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      products.renderCards(cat);
    });
    filters.appendChild(btn);
  });

  products.setupProductTools();
};

products.renderCards = function renderCards(category) {
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
    products.setGridState("empty", "No products found.");
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
          <a class="ghost quick-inquiry-btn" href="${products.getQuickInquiryUrl(item)}" target="_blank" rel="noopener noreferrer">
            <span class="action-text">Quick Inquiry</span>
            <img class="action-icon" src="images/inquiry.png" alt="Quick inquiry" />
          </a>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  window.App?.ui?.bindImageFallbacks(grid);
};

products.getWishlist = function getWishlist() {
  return JSON.parse(localStorage.getItem(WISHLIST_KEY) || "[]");
};

products.saveWishlist = function saveWishlist(nextList) {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(nextList));
};

products.getWishlistIds = function getWishlistIds() {
  const session = window.App?.auth?.getSession?.();
  if (!session) return [];
  if (Array.isArray(wishlistIds)) return wishlistIds;
  return products.getWishlist();
};

products.getWishlistCount = function getWishlistCount() {
  const session = window.App?.auth?.getSession?.();
  if (!session) return 0;
  return products.getWishlistIds().length;
};

products.setPendingWishlist = function setPendingWishlist(productId) {
  const current = window.App?.auth?.getCurrentPagePath?.() || "";
  const payload = { id: productId, returnUrl: current };
  localStorage.setItem(WISHLIST_PENDING_KEY, JSON.stringify(payload));
};

products.applyPendingWishlist = async function applyPendingWishlist() {
  const session = window.App?.auth?.getSession?.();
  if (!session) return;
  const pending = JSON.parse(localStorage.getItem(WISHLIST_PENDING_KEY) || "null");
  if (!pending?.id) return;
  if (!products.isWishlisted(pending.id)) {
    await products.addWishlistItem(pending.id, { silent: true });
  }
  localStorage.removeItem(WISHLIST_PENDING_KEY);
};

products.isWishlisted = function isWishlisted(productId) {
  const session = window.App?.auth?.getSession?.();
  if (!session) return false;
  return products.getWishlistIds().includes(productId);
};

products.loadWishlistFromServer = async function loadWishlistFromServer() {
  const session = window.App?.auth?.getSession?.();
  if (!session) {
    wishlistIds = [];
    return;
  }
  try {
    const data = await window.App?.auth?.apiRequest?.("/wishlist");
    const items = Array.isArray(data?.items) ? data.items : [];
    wishlistIds = items.map((item) => String(item.productId || item.product_id || item.id || ""));
    wishlistIds = wishlistIds.filter(Boolean);
    products.saveWishlist(wishlistIds);
  } catch (error) {
    if (!wishlistSyncWarned && error?.status === 404) {
      wishlistSyncWarned = true;
      window.App?.ui?.showToast?.("Wishlist sync unavailable. Backend update needed.", { type: "error" });
    }
    wishlistIds = products.getWishlist();
  }
};

products.addWishlistItem = async function addWishlistItem(productId, { silent = false } = {}) {
  const session = window.App?.auth?.getSession?.();
  if (!session) return false;
  try {
    await window.App?.auth?.apiRequest?.("/wishlist", {
      method: "POST",
      body: { productId }
    });
    if (!wishlistIds) wishlistIds = products.getWishlist();
    if (!wishlistIds.includes(productId)) wishlistIds.push(productId);
    products.saveWishlist(wishlistIds);
    if (!silent) window.App?.ui?.showToast?.("Added to wishlist.", { type: "success" });
    products.renderWishlistNav();
    return true;
  } catch {
    if (!silent) window.App?.ui?.showToast?.("Could not update wishlist.", { type: "error" });
    return false;
  }
};

products.removeWishlistItem = async function removeWishlistItem(productId, { silent = false } = {}) {
  const session = window.App?.auth?.getSession?.();
  if (!session) return false;
  try {
    await window.App?.auth?.apiRequest?.(`/wishlist/${productId}`, { method: "DELETE" });
    const nextList = products.getWishlistIds().filter((id) => id !== productId);
    wishlistIds = nextList;
    products.saveWishlist(nextList);
    if (!silent) window.App?.ui?.showToast?.("Removed from wishlist.", { type: "success" });
    products.renderWishlistNav();
    return true;
  } catch {
    if (!silent) window.App?.ui?.showToast?.("Could not update wishlist.", { type: "error" });
    return false;
  }
};

products.toggleWishlist = async function toggleWishlist(productId) {
  if (products.isWishlisted(productId)) {
    return await products.removeWishlistItem(productId);
  }
  return await products.addWishlistItem(productId);
};

products.getWishlistModal = function getWishlistModal() {
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
};

products.renderWishlistModal = function renderWishlistModal() {
  const modal = products.getWishlistModal();
  const body = modal.querySelector(".wishlist-body");
  if (!(body instanceof HTMLElement)) return;

  const items = products
    .getWishlistIds()
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
};

products.openWishlistModal = function openWishlistModal() {
  const modal = products.getWishlistModal();
  products.renderWishlistModal();
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
};

products.closeWishlistModal = function closeWishlistModal() {
  const modal = document.querySelector(".wishlist-modal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
};

products.renderWishlistNav = function renderWishlistNav() {
  const navLinks = document.querySelector(".nav-links");
  const session = window.App?.auth?.getSession?.();
  const count = products.getWishlistCount();
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
};

products.getProductDrawer = function getProductDrawer() {
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
      products.closeProductDrawer();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") products.closeProductDrawer();
  });

  document.body.appendChild(drawer);
  productDrawer = drawer;
  return drawer;
};

products.openProductDrawer = function openProductDrawer(productId) {
  const product = productMap.get(productId);
  if (!product) return;

  const drawer = products.getProductDrawer();
  const content = drawer.querySelector(".product-drawer-content");
  if (!(content instanceof HTMLElement)) return;

  const fitClass = product.fit === "contain" ? "fit-contain" : "";
  const noteHtml = product.note ? `<p class="product-drawer-note">${product.note}</p>` : "";
  const wishlisted = products.isWishlisted(productId);
  const wishlistLabel = wishlisted ? "Wishlisted" : "Add to Wishlist";
  const wishlistState = wishlisted ? " active" : "";
  content.innerHTML = `
    <div class="product-drawer-media">
      <img src="${product.image}" alt="${product.title}" class="${fitClass}" />
      <div class="image-fallback">Image unavailable</div>
    </div>
    <div class="product-drawer-info">
      ${window.App?.ui?.getBreadcrumbHtml?.(
        [
          { label: "Home", href: "index.html" },
          { label: product.category, href: products.getCategoryPageHref(product.category) },
          { label: product.title }
        ],
        "breadcrumb-inline"
      ) || ""}
      <span class="tag">${product.category}</span>
      <h3>${product.title}</h3>
      ${noteHtml}
      <p class="product-drawer-copy">For pricing, stock status, and compatibility details, contact us directly.</p>
      <div class="product-drawer-actions">
        <a class="primary" href="${products.getQuickInquiryUrl(product)}" target="_blank" rel="noopener noreferrer">Quick Inquiry</a>
        <button class="ghost wishlist-btn${wishlistState}" data-wishlist-id="${productId}" type="button">
          <span class="wishlist-icon" aria-hidden="true">♡</span>
          <span class="wishlist-text">${wishlistLabel}</span>
        </button>
      </div>
    </div>
  `;

  window.App?.ui?.bindImageFallbacks?.(content);

  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
};

products.closeProductDrawer = function closeProductDrawer() {
  if (Date.now() < drawerLockUntil) return;
  if (!productDrawer) return;
  productDrawer.classList.remove("open");
  productDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
};

products.loadProductsFromJson = async function loadProductsFromJson() {
  const res = await fetch("data/products.json", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load products");
  const data = await res.json();
  const items = Array.isArray(data) ? data : [];
  return items.map((item, index) => ({
    id: item.id || `prd-${index + 1}`,
    title: String(item.title || ""),
    category: String(item.category || ""),
    image: String(item.image || ""),
    note: String(item.note || ""),
    fit: item.fit ? String(item.fit) : ""
  }));
};

products.loadInventory = async function loadInventory() {
  try {
    const items = await products.loadProductsFromJson();
    products.setInventory(items);
  } catch (error) {
    if (!backendDownNotified) {
      backendDownNotified = true;
      window.App?.ui?.showToast?.("Could not load products. Please refresh.", { type: "error" });
    }
    products.setInventory([]);
  }
};

window.App = window.App || {};
window.App.products = products;

export default products;
