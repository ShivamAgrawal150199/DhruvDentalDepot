import "./ui.js";
import "./auth.js";
import "./products.js";
import "./cart.js";

const CONTACT_PHONE = "+919335485398";
const WHATSAPP_NUMBER = "919335485398";

let imageLightbox = null;
let userDrawer = null;
let userDrawerAnchor = null;

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
  const auth = window.App?.auth;
  const products = window.App?.products;
  const ui = window.App?.ui;

  let session = auth?.getSession?.();
  if (!session) {
    session = await auth?.refreshSessionFromServer?.();
  }
  if (!session) {
    ui?.showToast?.("Please login to view account options.", { type: "info" });
    window.location.href = auth?.getLoginUrl?.() || "login.html";
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
    const count = products?.getWishlistCount?.() || 0;
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
  products?.renderWishlistNav?.();
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

  const session = window.App?.auth?.getSession?.();
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

function renderAuthNav() {
  const navLinks = document.querySelector(".nav-links");
  if (!navLinks) return;

  const session = window.App?.auth?.getSession?.();
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
    authLink.href = window.App?.auth?.getLoginUrl?.() || "login.html";
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

  window.App?.products?.renderWishlistNav?.();
  renderUserIcon();
}

function isPhoneViewport() {
  return window.matchMedia("(max-width: 680px)").matches;
}

function getImageLightbox() {
  if (imageLightbox) return imageLightbox;

  const overlay = document.createElement("div");
  overlay.className = "image-lightbox";
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML = `
    <div class="image-lightbox-backdrop"></div>
    <div class="image-lightbox-panel">
      <button class="image-lightbox-close" type="button" aria-label="Close image">X</button>
      <img src="" alt="" />
    </div>
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

function renderAccountProfile(session, container) {
  if (!container) return;
  container.innerHTML = `
    <div class="account-card">
      <div class="account-card-header">
        <h3>Profile</h3>
        <a class="ghost" href="profile.html">Edit Profile</a>
      </div>
      <dl class="account-grid">
        <div>
          <dt>Name</dt>
          <dd>${session.name || "-"}</dd>
        </div>
        <div>
          <dt>Email</dt>
          <dd>${session.email || "-"}</dd>
        </div>
        <div>
          <dt>Phone</dt>
          <dd>${session.phone || "-"}</dd>
        </div>
        <div>
          <dt>City</dt>
          <dd>${session.city || "-"}</dd>
        </div>
        <div>
          <dt>Profession</dt>
          <dd>${session.profession || "-"}</dd>
        </div>
      </dl>
    </div>
  `;
}

function renderAccountWishlist(container) {
  if (!container) return;
  const items = window.App?.products
    ?.getWishlistIds?.()
    .map((id) => window.App?.products?.getProductById?.(id))
    .filter(Boolean);

  if (!items?.length) {
    container.innerHTML = `<div class="account-card"><div class="empty">No wishlist items yet.</div></div>`;
    return;
  }

  container.innerHTML = `
    <div class="account-card">
      <h3>Wishlist</h3>
      <div class="account-list">
        ${items
          .map(
            (item) => `
          <article class="account-item">
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
          .join("")}
      </div>
    </div>
  `;
}

function renderAccountOrders(container, orders) {
  if (!container) return;
  if (!orders.length) {
    container.innerHTML = `<div class="account-card"><div class="empty">No orders yet.</div></div>`;
    return;
  }

  container.innerHTML = `
    <div class="account-card">
      <h3>Orders</h3>
      <div class="account-list">
        ${orders
          .map(
            (order) => `
          <article class="order-card">
            <div class="order-header">
              <div>
                <h4>Order ${order.id}</h4>
                <p>${new Date(order.createdAt).toLocaleDateString()}</p>
              </div>
              <span class="tag">${order.items.length} items</span>
            </div>
            <ul>
              ${order.items
                .map((item) => `<li>${item.title} x ${item.qty}</li>`)
                .join("")}
            </ul>
          </article>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}

async function setupAccountPage() {
  const root = document.getElementById("accountPage");
  if (!root) return;

  const auth = window.App?.auth;
  const session = (await auth?.refreshSessionFromServer?.()) || auth?.getSession?.();
  if (!session) {
    window.location.href = auth?.getLoginUrl?.() || "login.html";
    return;
  }

  const tabs = root.querySelectorAll("[data-account-tab]");
  const sections = root.querySelectorAll("[data-account-section]");
  const showSection = (id) => {
    tabs.forEach((btn) => btn.classList.toggle("active", btn.dataset.accountTab === id));
    sections.forEach((sec) => sec.classList.toggle("active", sec.dataset.accountSection === id));
  };

  tabs.forEach((btn) => {
    btn.addEventListener("click", () => showSection(btn.dataset.accountTab));
  });

  const profileSlot = root.querySelector("[data-account-section='profile']");
  const wishlistSlot = root.querySelector("[data-account-section='wishlist']");
  const ordersSlot = root.querySelector("[data-account-section='orders']");

  renderAccountProfile(session, profileSlot);
  renderAccountWishlist(wishlistSlot);

  if (ordersSlot) {
    ordersSlot.innerHTML = `<div class="account-card"><div class="empty">Loading orders...</div></div>`;
    try {
      const data = await auth?.apiRequest?.("/orders/me");
      const orders = Array.isArray(data?.orders) ? data.orders : [];
      renderAccountOrders(ordersSlot, orders);
    } catch (error) {
      ordersSlot.innerHTML = `<div class="account-card"><div class="empty">${
        error.isNetwork ? "Server unavailable. Please try again later." : "Could not load orders."
      }</div></div>`;
    }
  }

  showSection("profile");
}

async function setupAdminPage() {
  const adminForm = document.getElementById("productForm");
  const adminList = document.getElementById("productList");
  const adminStatus = document.getElementById("adminStatus");
  if (!adminForm || !adminList) return;

  const auth = window.App?.auth;
  const session = (await auth?.refreshSessionFromServer?.()) || auth?.getSession?.();
  if (!session) {
    window.location.href = "login.html?next=admin-products.html";
    return;
  }

  async function renderAdminProducts() {
    try {
      const data = await auth?.apiRequest?.("/products");
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
      await auth?.apiRequest?.("/products", {
        method: "POST",
        body: payload
      });
      adminForm.reset();
      if (adminStatus) adminStatus.textContent = "Product added.";
      await renderAdminProducts();
      await window.App?.products?.loadInventory?.();
    } catch (error) {
      if (adminStatus) adminStatus.textContent = error.message || "Could not add product.";
    }
  });

  adminList.addEventListener("click", async (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const btn = target.closest("[data-delete-product]");
    if (!btn) return;
    const id = btn.getAttribute("data-delete-product");
    if (!id) return;
    try {
      await auth?.apiRequest?.(`/products/${id}`, { method: "DELETE" });
      await renderAdminProducts();
      await window.App?.products?.loadInventory?.();
    } catch (error) {
      if (adminStatus) adminStatus.textContent = error.message || "Could not delete product.";
    }
  });

  await renderAdminProducts();
}

function setupCartInteractions() {
  const grid = document.getElementById("grid");
  const products = window.App?.products;
  const cart = window.App?.cart;
  if (grid) {
    grid.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const detailsBtn = target.closest(".details-btn");
      if (detailsBtn instanceof HTMLElement) {
        const detailsId = detailsBtn.getAttribute("data-details-id");
        if (detailsId) products?.openProductDrawer?.(detailsId);
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

      cart?.addToCart?.(productId);
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

      if (action === "plus") cart?.changeQty?.(id, 1);
      if (action === "minus") cart?.changeQty?.(id, -1);
      if (action === "remove") cart?.removeItem?.(id);
    });
  }

  document.addEventListener("click", async (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const userDrawerBtn = target.closest("[data-user-drawer-btn]");
    if (userDrawerBtn) {
      openUserDrawer(userDrawerBtn);
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
      products?.openWishlistModal?.();
      return;
    }

    const wishlistClose = target.closest("[data-wishlist-close]");
    if (wishlistClose) {
      products?.closeWishlistModal?.();
      return;
    }

    const wishlistRemove = target.closest("[data-wishlist-remove]");
    if (wishlistRemove instanceof HTMLElement) {
      const id = wishlistRemove.getAttribute("data-wishlist-remove");
      if (!id) return;
      await products?.removeWishlistItem?.(id);
      products?.renderWishlistModal?.();
      const accountWishlist = document.querySelector("[data-account-section='wishlist']");
      if (accountWishlist) renderAccountWishlist(accountWishlist);
      return;
    }

    const wishlistBtn = target.closest("[data-wishlist-id]");
    if (wishlistBtn instanceof HTMLElement) {
      event.preventDefault();
      event.stopPropagation();
      const session = window.App?.auth?.getSession?.();
      if (!session) {
        const id = wishlistBtn.getAttribute("data-wishlist-id");
        if (id) products?.setPendingWishlist?.(id);
        window.location.href = window.App?.auth?.getLoginUrl?.() || "login.html";
        return;
      }
      const id = wishlistBtn.getAttribute("data-wishlist-id");
      if (!id) return;
      const nowWishlisted = await products?.toggleWishlist?.(id);
      const textEl = wishlistBtn.querySelector(".wishlist-text");
      if (textEl) textEl.textContent = nowWishlisted ? "Wishlisted" : "Add to Wishlist";
      wishlistBtn.classList.toggle("active", nowWishlisted);
      products?.setDrawerLock?.(500);
      products?.openProductDrawer?.(id);
      return;
    }

    if (!target.closest("[data-logout-btn]")) return;
    closeUserDrawer();
    const session = window.App?.auth?.getSession?.();
    const name = session?.name ? ` ${session.name}` : "";
    const ok = await window.App?.ui?.showConfirmLogout?.(`Hi${name}, are you sure you want to logout?`);
    if (!ok) return;
    try {
      await window.App?.auth?.apiRequest?.("/auth/logout", { method: "POST" });
    } catch {
      // Ignore and clear local session anyway.
    }
    window.App?.auth?.clearSession?.();
    window.App?.products?.saveWishlist?.([]);
    closeUserDrawer();
    renderAuthNav();
    window.App?.cart?.renderCartPage?.();
    window.App?.ui?.showToast?.("User logged out successfully.", { type: "success" });
    if (document.body?.dataset?.requiresAuth === "true") {
      window.location.href = "index.html";
    }
  });
}

async function bootstrap() {
  window.App?.ui?.applyTheme?.(window.App?.ui?.getStoredTheme?.());

  if (window.App?.auth?.guardCheckoutPage?.()) return;

  if (document.body?.dataset?.category !== "All" && document.getElementById("filters")) {
    document.getElementById("filters").style.display = "none";
  }

  const canLoad = await window.App?.cart?.requireAuthForCheckout?.();
  if (!canLoad) return;

  window.App?.products?.setGridState?.("loading", "Loading products...");
  await window.App?.products?.loadInventory?.();

  window.App?.products?.renderFilters?.();
  window.App?.products?.setupBreadcrumbs?.();
  window.App?.products?.renderCards?.(document.body?.dataset?.category || "All");

  const session = await window.App?.auth?.refreshSessionFromServer?.();
  if (session) {
    await window.App?.products?.loadWishlistFromServer?.();
    await window.App?.products?.applyPendingWishlist?.();
  }
  window.App?.products?.renderWishlistNav?.();

  window.App?.cart?.renderCartPage?.();
  window.App?.cart?.renderCheckoutSummary?.();
  window.App?.cart?.setupCartPage?.();
  await window.App?.cart?.setupCheckoutPage?.();
  await window.App?.auth?.setupAuthPage?.();
  await window.App?.auth?.setupProfilePage?.();
  await setupAccountPage();
  await setupAdminPage();
  window.App?.cart?.updateCartBadge?.();
  renderAuthNav();
  window.App?.ui?.setupThemeToggle?.();
  window.App?.ui?.setupMobileNavMenu?.();
  setupScrollReveal();
  setupInstagramFollowButton();
  setupStickyContactBar();
  setupPriceListForm();
  setupCartInteractions();
}

document.addEventListener("auth:login", async () => {
  await window.App?.products?.loadWishlistFromServer?.();
  await window.App?.products?.applyPendingWishlist?.();
  window.App?.products?.renderWishlistNav?.();
  renderAuthNav();
});

document.addEventListener("auth:profile-updated", () => {
  renderAuthNav();
});

bootstrap();
