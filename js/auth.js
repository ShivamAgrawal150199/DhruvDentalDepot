const auth = {};

const SESSION_KEY = "ddd_session_profile";
const API_BASE = window.APP_CONFIG?.API_BASE || "http://localhost:4000";
const SITE_URL = window.APP_CONFIG?.SITE_URL || window.location.origin;
const DISABLE_CHECKOUT = true;

function safeJsonParse(value, fallback) {
  try {
    return JSON.parse(value) || fallback;
  } catch {
    return fallback;
  }
}

auth.getCurrentPagePath = function getCurrentPagePath() {
  return `${window.location.pathname}${window.location.search || ""}${window.location.hash || ""}`;
};

auth.getReturnUrlFromReferrer = function getReturnUrlFromReferrer() {
  try {
    const ref = document.referrer ? new URL(document.referrer) : null;
    if (!ref || ref.origin !== window.location.origin) return "";
    const page = ref.pathname.split("/").pop() || "index.html";
    return `${page}${ref.search}${ref.hash}`;
  } catch {
    return "";
  }
};

auth.getLoginUrl = function getLoginUrl() {
  const current = auth.getCurrentPagePath();
  const next = current.includes("login.html")
    ? auth.getReturnUrlFromReferrer() || "index.html"
    : current;
  return `login.html?next=${encodeURIComponent(next)}`;
};

auth.normalizeNextUrl = function normalizeNextUrl(nextUrl) {
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
};

auth.guardCheckoutPage = function guardCheckoutPage() {
  if (!DISABLE_CHECKOUT) return false;
  if (!/checkout\.html$/i.test(window.location.pathname)) return false;
  window.location.href = "index.html";
  return true;
};

auth.apiRequest = async function apiRequest(path, options = {}) {
  let response;
  try {
    response = await fetch(`${API_BASE}${path}`, {
      method: options.method || "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {})
      },
      body: options.body ? JSON.stringify(options.body) : undefined
    });
  } catch (_error) {
    const error = new Error("Server unavailable. Please try again in a moment.");
    error.status = 0;
    error.isNetwork = true;
    throw error;
  }

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
};

auth.getSession = function getSession() {
  return safeJsonParse(localStorage.getItem(SESSION_KEY), null);
};

auth.saveSession = function saveSession(session) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
};

auth.clearSession = function clearSession() {
  localStorage.removeItem(SESSION_KEY);
};

auth.refreshSessionFromServer = async function refreshSessionFromServer() {
  try {
    const data = await auth.apiRequest("/auth/me");
    if (data?.user) {
      auth.saveSession(data.user);
      return data.user;
    }
    auth.clearSession();
    return null;
  } catch (error) {
    if (error.status === 401) {
      auth.clearSession();
      return null;
    }
    return auth.getSession();
  }
};

auth.setupAuthPage = async function setupAuthPage() {
  const form = document.getElementById("authForm");
  const status = document.getElementById("authStatus");
  if (!form) return;

  const ui = window.App?.ui;
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
  const fallbackNext = auth.getReturnUrlFromReferrer() || "index.html";
  const next = auth.normalizeNextUrl(params.get("next") || fallbackNext);
  const googleBtn = document.getElementById("googleLoginBtn");
  if (googleBtn instanceof HTMLAnchorElement) {
    googleBtn.href = `${API_BASE}/auth/google?next=${encodeURIComponent(next)}`;
  }

  const existing = (await auth.refreshSessionFromServer()) || auth.getSession();
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
        data = await auth.apiRequest("/auth/register", {
          method: "POST",
          body: { name, email, password }
        });
      } else {
        data = await auth.apiRequest("/auth/login", {
          method: "POST",
          body: { email, password }
        });
      }

      if (data?.user) {
        auth.saveSession(data.user);
      }
      if (action === "register") {
        ui?.showToast("Account created successfully.", { type: "success" });
      } else {
        ui?.showToast("Logged in successfully.", { type: "success" });
      }
      document.dispatchEvent(new CustomEvent("auth:login", { detail: { action } }));
      setTimeout(() => {
        window.location.href = next;
      }, 900);
    } catch (error) {
      if (status) {
        status.textContent =
          error.isNetwork
            ? "Server unavailable. Please try again in a moment."
            : error.message || "Authentication failed.";
      }
      ui?.showToast(
        error.isNetwork
          ? "Server unavailable. Please try again in a moment."
          : error.message || "Authentication failed.",
        { type: "error" }
      );
    }
  });
};

auth.setupProfilePage = async function setupProfilePage() {
  const form = document.getElementById("profileForm");
  const status = document.getElementById("profileStatus");
  if (!form) return;

  const ui = window.App?.ui;
  let session = (await auth.refreshSessionFromServer()) || auth.getSession();
  if (!session) {
    window.location.href = auth.getLoginUrl();
    return;
  }

  const nameInput = form.querySelector("input[name='name']");
  const emailInput = form.querySelector("input[name='email']");
  const phoneInput = form.querySelector("input[name='phone']");
  const cityInput = form.querySelector("input[name='city']");
  const phoneError = document.getElementById("phoneError");
  if (nameInput instanceof HTMLInputElement) nameInput.value = session.name || "";
  if (emailInput instanceof HTMLInputElement) emailInput.value = session.email || "";
  if (phoneInput instanceof HTMLInputElement) {
    phoneInput.value = session.phone || "";
    phoneInput.readOnly = Boolean(session.phone);
  }
  if (cityInput instanceof HTMLInputElement) cityInput.value = session.city || "";
  const professionInput = form.querySelector("select[name='profession']");
  if (professionInput instanceof HTMLSelectElement) {
    professionInput.value = (session.profession || "").toLowerCase();
  }

  const readState = () => ({
    name: nameInput instanceof HTMLInputElement ? nameInput.value.trim() : "",
    phone: phoneInput instanceof HTMLInputElement ? phoneInput.value.trim() : "",
    city: cityInput instanceof HTMLInputElement ? cityInput.value.trim() : "",
    profession: professionInput instanceof HTMLSelectElement ? professionInput.value.trim() : ""
  });

  let initialState = readState();
  let isDirty = false;

  const updateDirtyFlag = () => {
    const next = readState();
    isDirty =
      next.name !== initialState.name ||
      next.phone !== initialState.phone ||
      next.city !== initialState.city ||
      next.profession !== initialState.profession;
  };

  form.addEventListener("input", updateDirtyFlag);
  form.addEventListener("change", updateDirtyFlag);

  const saveProfile = async () => {
    const nextName = nameInput instanceof HTMLInputElement ? nameInput.value.trim() : "";
    const nextPhone = phoneInput instanceof HTMLInputElement ? phoneInput.value.trim() : "";
    const nextCity = cityInput instanceof HTMLInputElement ? cityInput.value.trim() : "";
    const nextProfession = professionInput instanceof HTMLSelectElement
      ? professionInput.value.trim()
      : "";
    if (!nextName) {
      if (status) status.textContent = "Name is required.";
      return false;
    }
    if (!nextPhone) {
      if (phoneError) phoneError.textContent = "Phone number is required.";
      return false;
    }
    if (phoneError) phoneError.textContent = "";
    const phoneDigits = nextPhone.replace(/\D/g, "");
    let normalizedPhone = "";
    if (phoneDigits.length === 10) {
      normalizedPhone = phoneDigits;
    } else if (phoneDigits.length === 12 && phoneDigits.startsWith("91")) {
      normalizedPhone = phoneDigits.slice(2);
    }
    if (!normalizedPhone) {
      if (phoneError) phoneError.textContent = "Enter a valid 10-digit Indian phone number.";
      return false;
    }
    if (!nextCity) {
      if (status) status.textContent = "City is required.";
      return false;
    }
    if (!nextProfession) {
      if (status) status.textContent = "Profession is required.";
      return false;
    }

    try {
      const data = await auth.apiRequest("/auth/profile", {
        method: "PUT",
        body: { name: nextName, phone: normalizedPhone, city: nextCity, profession: nextProfession }
      });
      if (data?.user) {
        auth.saveSession(data.user);
      }
      if (phoneInput instanceof HTMLInputElement) {
        phoneInput.readOnly = Boolean(normalizedPhone);
      }
      if (status) status.textContent = "Profile updated successfully.";
      ui?.showToast("Profile updated.", { type: "success" });
      document.dispatchEvent(new CustomEvent("auth:profile-updated", { detail: data?.user }));
      initialState = readState();
      isDirty = false;
      return true;
    } catch (error) {
      if (error.status === 409 && phoneError) {
        phoneError.textContent = "Phone number is already registered.";
      } else if (status) {
        status.textContent =
          error.isNetwork
            ? "Server unavailable. Please try again in a moment."
            : error.message || "Could not update profile.";
      }
      if (error.status !== 409) {
        ui?.showToast(
          error.isNetwork
            ? "Server unavailable. Please try again in a moment."
            : error.message || "Could not update profile.",
          { type: "error" }
        );
      }
      return false;
    }
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    await saveProfile();
  });

  const deleteBtn = form.querySelector("[data-delete-account]");
  if (deleteBtn instanceof HTMLButtonElement) {
    deleteBtn.addEventListener("click", async () => {
      const ok = await ui?.showConfirmDialog?.({
        title: "Delete Account",
        message: "This will permanently delete your account and wishlist. Continue?",
        confirmLabel: "Yes, Delete",
        cancelLabel: "Cancel"
      });
      if (!ok) return;
      try {
        await auth.apiRequest("/auth/me", { method: "DELETE" });
        auth.clearSession();
        window.App?.products?.saveWishlist?.([]);
        ui?.showToast("Account deleted successfully.", { type: "success" });
        window.location.href = "index.html";
      } catch (error) {
        ui?.showToast(
          error.isNetwork
            ? "Server unavailable. Please try again in a moment."
            : error.message || "Could not delete account.",
          { type: "error" }
        );
      }
    });
  }

  const shouldIgnoreLink = (link) => {
    if (!link || !(link instanceof HTMLAnchorElement)) return true;
    if (link.hasAttribute("data-skip-guard")) return true;
    if (link.target === "_blank") return true;
    const href = link.getAttribute("href") || "";
    if (!href || href.startsWith("#") || href.startsWith("javascript:")) return true;
    if (href.startsWith("mailto:") || href.startsWith("tel:")) return true;
    if (link.closest(".confirm-modal")) return true;
    try {
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return true;
      const current = window.location.pathname;
      if (url.pathname === current && url.search === window.location.search) return true;
    } catch {
      return true;
    }
    return false;
  };

  document.addEventListener("click", async (event) => {
    if (!isDirty) return;
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const link = target.closest("a");
    if (shouldIgnoreLink(link)) return;
    event.preventDefault();
    const href = link.getAttribute("href");
    const ok = await ui?.showConfirmDialog?.({
      title: "Unsaved Changes",
      message: "You have unsaved changes. Save before leaving this page?",
      confirmLabel: "Save",
      cancelLabel: "Cancel"
    });
    if (!ok) return;
    const saved = await saveProfile();
    if (saved && href) {
      window.location.href = href;
    }
  });

  window.addEventListener("beforeunload", (event) => {
    if (!isDirty) return;
    event.preventDefault();
    event.returnValue = "";
  });
};

auth.constants = { API_BASE, SITE_URL, DISABLE_CHECKOUT };

window.App = window.App || {};
window.App.auth = auth;

export default auth;
