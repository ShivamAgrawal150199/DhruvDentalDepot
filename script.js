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
    title: "New 04",
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
    title: "New 06",
    category: "Accessories",
    image: "images/new6.jpeg",
    note: ""
  },
  {
    title: "New 07",
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
const THEME_KEY = "ddd_theme";
const CONTACT_PHONE = "+919335485398";
const WHATSAPP_NUMBER = "919335485398";

let inventory = [...defaultInventory];
let productMap = new Map(inventory.map((item) => [item.id, item]));
let activeCategory = "All";
let searchQuery = "";
let sortMode = "default";

const grid = document.getElementById("grid");
const filters = document.getElementById("filters");
const pageCategory = document.body?.dataset?.category || "All";

function getCategories() {
  return ["All", ...new Set(inventory.map((item) => item.category))];
}

function setInventory(nextInventory) {
  inventory = nextInventory;
  productMap = new Map(inventory.map((item) => [item.id, item]));
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

  if (session) {
    if (!adminLink.parentElement) {
      navLinks.appendChild(adminLink);
    }
    adminLink.href = "admin-products.html";

    authLink.href = "login.html?next=checkout.html";
    authLink.textContent = session.name ? `Hi, ${session.name}` : "My Account";

    if (!logoutBtn) {
      logoutBtn = document.createElement("button");
      logoutBtn.type = "button";
      logoutBtn.className = "nav-btn";
      logoutBtn.setAttribute("data-logout-btn", "true");
      logoutBtn.textContent = "Logout";
      navLinks.appendChild(logoutBtn);
    }
  } else {
    if (adminLink.parentElement) adminLink.remove();
    authLink.href = "login.html?next=checkout.html";
    authLink.textContent = "Login";
    if (logoutBtn) logoutBtn.remove();
  }
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

let productDrawer = null;

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
    if (!target.closest("[data-drawer-close]")) return;
    closeProductDrawer();
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
  content.innerHTML = `
    <div class="product-drawer-media">
      <img src="${product.image}" alt="${product.title}" class="${fitClass}" />
    </div>
    <div class="product-drawer-info">
      <span class="tag">${product.category}</span>
      <h3>${product.title}</h3>
      ${noteHtml}
      <p class="product-drawer-copy">For pricing, stock status, and compatibility details, contact us directly.</p>
      <div class="product-drawer-actions">
        <a class="primary" href="${getQuickInquiryUrl(product)}" target="_blank" rel="noopener noreferrer">Quick Inquiry</a>
      </div>
    </div>
  `;

  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
}

function closeProductDrawer() {
  if (!productDrawer) return;
  productDrawer.classList.remove("open");
  productDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
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
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "No matching products found.";
    grid.appendChild(empty);
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
  window.location.href = "login.html?next=checkout.html";
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
      window.location.href = "login.html?next=checkout.html";
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

  const params = new URLSearchParams(window.location.search);
  const next = params.get("next") || "checkout.html";

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
      window.location.href = next;
    } catch (error) {
      if (status) status.textContent = error.message || "Authentication failed.";
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
    if (!target.closest("[data-logout-btn]")) return;
    try {
      await apiRequest("/auth/logout", { method: "POST" });
    } catch {
      // Ignore and clear local session anyway.
    }
    clearSession();
    renderAuthNav();
    renderCartPage();
    if (document.body?.dataset?.requiresAuth === "true") {
      window.location.href = "login.html?next=checkout.html";
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

  if (pageCategory !== "All" && filters) {
    filters.style.display = "none";
  }

  const canLoad = await requireAuthForCheckout();
  if (!canLoad) return;

  await loadInventoryFromServer();

  renderFilters();
  renderCards(pageCategory);
  renderCartPage();
  renderCheckoutSummary();
  setupCartInteractions();
  handleCheckoutSubmit();
  await setupAuthPage();
  await setupAdminPage();
  updateCartBadge();
  renderAuthNav();
  setupThemeToggle();
  setupMobileNavMenu();
  setupScrollReveal();
  setupInstagramFollowButton();
  setupStickyContactBar();
  setupPriceListForm();

  const user = await refreshSessionFromServer();
  if (user) {
    renderAuthNav();
    renderCartPage();
  }
}

bootstrap();



