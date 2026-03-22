const ui = {};

ui.getToastStack = function getToastStack() {
  let stack = document.querySelector(".toast-stack");
  if (!stack) {
    stack = document.createElement("div");
    stack.className = "toast-stack";
    stack.setAttribute("aria-live", "polite");
    stack.setAttribute("aria-atomic", "false");
    document.body.appendChild(stack);
  }
  return stack;
};

ui.showToast = function showToast(message, options = {}) {
  if (!message) return;
  const { type = "info", duration = 2600 } = options;
  const stack = ui.getToastStack();
  const toast = document.createElement("div");
  toast.className = `toast toast--${type}`;
  toast.setAttribute("role", "status");
  toast.innerHTML = `
    <span class="toast__text"></span>
    <button class="toast__close" type="button" aria-label="Dismiss notification">×</button>
  `;
  const textEl = toast.querySelector(".toast__text");
  if (textEl) textEl.textContent = message;

  const removeToast = () => {
    toast.classList.remove("show");
    toast.addEventListener(
      "transitionend",
      () => {
        toast.remove();
      },
      { once: true }
    );
  };

  const closeBtn = toast.querySelector(".toast__close");
  if (closeBtn instanceof HTMLButtonElement) {
    closeBtn.addEventListener("click", removeToast);
  }

  stack.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));

  if (duration > 0) {
    setTimeout(removeToast, duration);
  }
};

ui.getConfirmModal = function getConfirmModal() {
  let modal = document.querySelector(".confirm-modal");
  if (modal) return modal;

  modal = document.createElement("div");
  modal.className = "confirm-modal";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="confirm-backdrop" data-confirm-cancel="true"></div>
    <div class="confirm-panel" role="dialog" aria-modal="true" aria-label="Confirmation">
      <h3 id="confirmTitle">Confirm</h3>
      <p id="confirmMessage"></p>
      <div class="confirm-actions">
        <button class="ghost" type="button" data-confirm-cancel="true">Cancel</button>
        <button class="primary" type="button" data-confirm-yes="true">Confirm</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  return modal;
};

ui.showConfirmDialog = function showConfirmDialog(options = {}) {
  const {
    title = "Confirm",
    message = "",
    confirmLabel = "Confirm",
    cancelLabel = "Cancel"
  } = options;
  const modal = ui.getConfirmModal();
  const titleEl = modal.querySelector("#confirmTitle");
  const messageEl = modal.querySelector("#confirmMessage");
  const yesBtn = modal.querySelector("[data-confirm-yes]");
  const cancelButtons = modal.querySelectorAll("[data-confirm-cancel]");

  if (titleEl) titleEl.textContent = title;
  if (messageEl) messageEl.textContent = message;
  if (yesBtn instanceof HTMLButtonElement) yesBtn.textContent = confirmLabel;
  cancelButtons.forEach((btn) => {
    if (btn instanceof HTMLButtonElement) btn.textContent = cancelLabel;
  });
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
};

ui.showConfirmLogout = function showConfirmLogout(message) {
  return ui.showConfirmDialog({
    title: "Confirm Logout",
    message,
    confirmLabel: "Yes, Logout",
    cancelLabel: "Cancel"
  });
};

ui.getStoredTheme = function getStoredTheme() {
  const saved = localStorage.getItem("ddd_theme");
  return saved === "dark" ? "dark" : "light";
};

ui.applyTheme = function applyTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark-theme", isDark);
};

ui.setupThemeToggle = function setupThemeToggle() {
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
    localStorage.setItem("ddd_theme", nextTheme);
    ui.applyTheme(nextTheme);
    syncLabel();
  });
};

ui.setupMobileNavMenu = function setupMobileNavMenu() {
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
};

ui.bindImageFallbacks = function bindImageFallbacks(root = document) {
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
};

ui.getBreadcrumbHtml = function getBreadcrumbHtml(items, extraClass = "") {
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
};

window.App = window.App || {};
window.App.ui = ui;

export default ui;
