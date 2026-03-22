const cart = {};

const CART_KEY = "ddd_cart";

function safeJsonParse(value, fallback) {
  try {
    return JSON.parse(value) || fallback;
  } catch {
    return fallback;
  }
}

cart.getCart = function getCart() {
  return safeJsonParse(localStorage.getItem(CART_KEY), []);
};

cart.saveCart = function saveCart(nextCart) {
  localStorage.setItem(CART_KEY, JSON.stringify(nextCart));
  cart.updateCartBadge();
};

cart.getCartCount = function getCartCount() {
  return cart.getCart().reduce((sum, item) => sum + item.qty, 0);
};

cart.updateCartBadge = function updateCartBadge() {
  const count = cart.getCartCount();
  document.querySelectorAll("[data-cart-count]").forEach((badge) => {
    badge.textContent = String(count);
    badge.classList.toggle("visible", count > 0);
  });
};

cart.addToCart = function addToCart(productId) {
  const current = cart.getCart();
  const existing = current.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    current.push({ id: productId, qty: 1 });
  }
  cart.saveCart(current);
};

cart.changeQty = function changeQty(productId, delta) {
  const current = cart.getCart();
  const index = current.findIndex((item) => item.id === productId);
  if (index === -1) return;
  current[index].qty += delta;
  if (current[index].qty <= 0) {
    current.splice(index, 1);
  }
  cart.saveCart(current);
  cart.renderCartPage();
  cart.renderCheckoutSummary();
};

cart.removeItem = function removeItem(productId) {
  const nextCart = cart.getCart().filter((item) => item.id !== productId);
  cart.saveCart(nextCart);
  cart.renderCartPage();
  cart.renderCheckoutSummary();
};

cart.getCartDetailed = function getCartDetailed() {
  const products = window.App?.products;
  return cart
    .getCart()
    .map((line) => {
      const product = products?.getProductById?.(line.id);
      if (!product) return null;
      return {
        ...line,
        product
      };
    })
    .filter(Boolean);
};

cart.renderCartPage = function renderCartPage() {
  const cartItemsRoot = document.getElementById("cartItems");
  const cartTotalCount = document.getElementById("cartTotalCount");
  const checkoutBtn = document.getElementById("goCheckout");

  if (!cartItemsRoot) return;

  const detailed = cart.getCartDetailed();
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
    const disableCheckout = window.App?.auth?.constants?.DISABLE_CHECKOUT;
    if (disableCheckout) {
      checkoutBtn.href = "#";
      checkoutBtn.textContent = "Ordering Disabled";
      checkoutBtn.setAttribute("aria-disabled", "true");
      return;
    }
    const loggedIn = Boolean(window.App?.auth?.getSession?.());
    checkoutBtn.href = loggedIn ? "checkout.html" : "login.html?next=checkout.html";
    checkoutBtn.textContent = loggedIn ? "Proceed to Checkout" : "Login to Checkout";
    checkoutBtn.removeAttribute("aria-disabled");
  }
};

cart.renderCheckoutSummary = function renderCheckoutSummary() {
  const summaryRoot = document.getElementById("orderSummary");
  if (!summaryRoot) return;

  const detailed = cart.getCartDetailed();
  if (detailed.length === 0) {
    summaryRoot.innerHTML = `<div class="empty">Your cart is empty. Add products before checkout.</div>`;
    return;
  }

  summaryRoot.innerHTML = detailed
    .map((line) => `<li>${line.product.title} <strong>x ${line.qty}</strong></li>`)
    .join("");
};

cart.requireAuthForCheckout = async function requireAuthForCheckout() {
  const needsAuth = document.body?.dataset?.requiresAuth === "true";
  if (!needsAuth) return true;
  if (window.App?.auth?.getSession?.()) return true;
  const user = await window.App?.auth?.refreshSessionFromServer?.();
  if (user) return true;
  window.location.href = window.App?.auth?.getLoginUrl?.() || "login.html";
  return false;
};

cart.handleCheckoutSubmit = function handleCheckoutSubmit() {
  const form = document.getElementById("checkoutForm");
  const status = document.getElementById("checkoutStatus");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const detailed = cart.getCartDetailed();
    if (detailed.length === 0) {
      if (status) status.textContent = "Your cart is empty. Add products before placing order.";
      return;
    }

    const currentUser =
      (await window.App?.auth?.refreshSessionFromServer?.()) || window.App?.auth?.getSession?.();
    if (!currentUser) {
      window.location.href = window.App?.auth?.getLoginUrl?.() || "login.html";
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
      const data = await window.App?.auth?.apiRequest?.("/orders", {
        method: "POST",
        body: payload
      });

      const orderId = data?.order?.id || "N/A";
      cart.saveCart([]);
      form.reset();
      cart.renderCheckoutSummary();

      if (status) {
        status.textContent = `Order placed successfully. Your order ID is ${orderId}.`;
      }
    } catch (error) {
      if (status) {
        status.textContent =
          error.isNetwork
            ? "Server unavailable. Please try again in a moment."
            : error.message || "Could not place order. Please try again.";
      }
    }
  });
};

cart.setupCartPage = function setupCartPage() {
  const cartItemsRoot = document.getElementById("cartItems");
  if (!cartItemsRoot) return;

  cart.renderCartPage();

  cartItemsRoot.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const action = target.dataset.action;
    const id = target.dataset.id;
    if (!action || !id) return;
    if (action === "minus") cart.changeQty(id, -1);
    if (action === "plus") cart.changeQty(id, 1);
    if (action === "remove") cart.removeItem(id);
  });
};

cart.setupCheckoutPage = async function setupCheckoutPage() {
  const form = document.getElementById("checkoutForm");
  if (!form) return;

  const allowed = await cart.requireAuthForCheckout();
  if (!allowed) return;
  cart.renderCheckoutSummary();
  cart.handleCheckoutSubmit();
};

window.App = window.App || {};
window.App.cart = cart;

export default cart;
