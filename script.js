const WHATSAPP = "923099480023";

const products = [
  {
    id: 1,
    name: "Mint Party Frock",
    category: "Clothes",
    price: 3000,
    oldPrice: 4000,
    age: "5–8 years",
    icon: "👗",
    image: "WhatsApp Image 2026-08-18 at 12.51.28 AM.jpeg"
  },
  {
    id: 2,
    name: "Baby Boys 4-piece suit set",
    category: "Clothes",
    price: 2000,
    oldPrice: 4000,
    age: "2-4 years",
    icon: "🩳👕",
    image: "WhatsApp Image 2026-08-15 at 9.12.49 PM.jpeg"
  },
  {
    id: 3,
    name: "Track Suit Set",
    category: "Clothes",
    price: 2000,
    oldPrice: 3000,
    age: "6 months-4 years",
    icon: "👕",
    image: "ChatGPT Image Aug 20, 2026, 11_28_46 PM.png"
  },
  {
    id: 4,
    name: "Brown Baby Shoes",
    category: "Shoes",
    price: 999,
    age: "Newborn–1 year",
    icon: "👟",
    image: "WhatsApp Image 2026-08-14 at 10.39.45 PM.jpeg"
  },
  {
    id: 5,
    name: "Brown Baby Shoes",
    category: "Shoes",
    price: 999,
    age: "Newborn–1 year",
    icon: "👟",
    image: "WhatsApp Image 2026-08-14 at 10.39.47 PM.jpeg"
  },
  {
    id: 6,
    name: "Brown Baby Shoes",
    category: "Shoes",
    price: 999,
    age: "Newborn–1 year",
    icon: "👟",
    image: "WhatsApp Image 2026-08-14 at 10.39.48 PM.jpeg"
  },
  {
    id: 7,
    name: "Red Girls Party Frock With Shoes",
    category: "Clothes",
    price: 4500,
    oldPrice: 6000,
    age: "4-8 years",
    icon: "👗",
    image: "ChatGPT Image Aug 20, 2026, 12_24_41 AM.png"
  },
  {
    id: 8,
    name: "Maxi",
    category: "Clothes",
    price: 4495,
    oldPrice: 7000,
    age: "4-12 years",
    icon: "👗",
    image: "ChatGPT Image Aug 20, 2026, 11_39_17 PM.png"
  },
  {
    id: 13,
    name: "Maxi",
    category: "Clothes",
    price: 9000,
    oldprice: 12000,
    age: "8-12 years",
    icon: "👗",
    image: "WhatsApp Image 2026-08-21 at 11.21.14 PM.jpeg"
  },
  {
    id: 14,
    name: "suit",
    category: "Clothes", 
    price: 3000,
    oldprice: 4500,
    age: "4-8 years",
    icon: "👗",
    image: "WhatsApp Image 2026-08-21 at 11.21.15 PM(1).jpeg"
  },
  {
    id: 15,
    name: "sharara suit",
      category: "Clothes",
    price: 3500,
    oldprice: 4500,
    age: "4-8 years",
    icon: "👗",
    image: "WhatsApp Image 2026-08-21 at 11.21.15 PM.jpeg"
  },
  {
    id: 9,
    name: "Product 4",
    category: "Toys",
    price: 0,
    icon: "🧸"
  },
  {
    id: 10,
    name: "Product 5",
    category: "Accessories",
    price: 0,
    icon: "🍼"
  },
  {
    id: 11,
    name: "Product 7",
    category: "Shoes",
    price: 0,
    icon: "👟"
  },
  {
    id: 12,
    name: "Product 8",
    category: "Toys",
    price: 0,
    icon: "🧸"
  },
  
];

let cart = [];
let activeFilter = "All";

const productsEl = document.getElementById("products");
const search = document.getElementById("search");
const cartCount = document.getElementById("cartCount");
const drawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("overlay");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");


function render() {
  const q = search.value.trim().toLowerCase();

  const list = products.filter(p =>
    (activeFilter === "All" || p.category === activeFilter) &&
    `${p.name} ${p.category}`.toLowerCase().includes(q)
  );

  productsEl.innerHTML = list.map(p => `
    <article class="product">

      <div class="product-pic" onclick="openImage('${p.image || ""}')">
        ${
          p.image
            ? `<img src="${p.image}" alt="${p.name}">`
            : p.icon
        }
      </div>

      <h3>${p.name}</h3>

      <p>${p.category} • ${p.age || ""}</p>

      <div class="price">
        ${
          p.price
            ? `<span>Rs. ${p.price.toLocaleString()}</span>`
            : `<span>Price coming soon</span>`
        }

        ${
          p.oldPrice
            ? `<del>Rs. ${p.oldPrice.toLocaleString()}</del>`
            : ""
        }
      </div>

      <button
        class="primary-btn"
        onclick="addToCart(${p.id})"
        ${!p.price ? "disabled" : ""}
      >
        ${p.price ? "Add to Cart" : "Coming Soon"}
      </button>

    </article>
  `).join("") || `<div class="empty">No products found.</div>`;
}


function openImage(image) {
  if (!image) return;

  const box = document.createElement("div");
  box.className = "image-popup";

  box.innerHTML = `
    <div class="image-popup-bg" onclick="this.parentElement.remove()"></div>

    <img
      src="${image}"
      onclick="event.stopPropagation()"
    >

    <button onclick="this.parentElement.remove()">×</button>
  `;

  document.body.appendChild(box);
}


function addToCart(id) {
  const product = products.find(p => p.id === id);

  if (!product || !product.price) {
    alert("This product price is not available yet.");
    return;
  }

  cart.push(product);

  updateCart();
  openCart();
}


function updateCart() {

  cartCount.textContent = cart.length;

  if (!cart.length) {

    cartItems.innerHTML = `
      <p class="muted">Your cart is empty.</p>
    `;

    cartTotal.textContent = "Total: Rs. 0";

    return;
  }

  let total = 0;

  cart.forEach(p => {
    total += Number(p.price) || 0;
  });


  cartItems.innerHTML = cart.map((p, i) => `
    <div class="cart-item">

      <div>
        <span>${p.icon || "🛍️"}</span>
        <b>${p.name}</b>

        <small>
          Rs. ${Number(p.price).toLocaleString()}
        </small>
      </div>

      <button onclick="removeFromCart(${i})">
        Remove
      </button>

    </div>
  `).join("");


  cartTotal.textContent =
    `Total: Rs. ${total.toLocaleString()}`;
}


function removeFromCart(i) {

  cart.splice(i, 1);

  updateCart();
}


function openCart() {

  drawer.classList.add("open");
  overlay.classList.add("show");
}


function closeCart() {

  drawer.classList.remove("open");
  overlay.classList.remove("show");
}


document.getElementById("filters").addEventListener("click", e => {

  if (!e.target.dataset.filter) return;

  activeFilter = e.target.dataset.filter;

  document.querySelectorAll("#filters button").forEach(b =>
    b.classList.toggle(
      "active",
      b === e.target
    )
  );

  render();
});


document.querySelectorAll(".categories button").forEach(button => {

  button.addEventListener("click", () => {

    activeFilter = button.dataset.category;

    document.querySelectorAll("#filters button").forEach(b =>
      b.classList.toggle(
        "active",
        b.dataset.filter === activeFilter
      )
    );

    document
      .getElementById("shop")
      .scrollIntoView({
        behavior: "smooth"
      });

    render();
  });

});


search.addEventListener("input", render);


document.getElementById("cartBtn").onclick = openCart;

document.getElementById("closeCart").onclick = closeCart;

overlay.onclick = closeCart;


document.getElementById("whatsappOrder").onclick = () => {

  if (!cart.length) {
    alert("Cart is empty.");
    return;
  }


  let total = 0;

  const items = cart.map(p => {

    total += Number(p.price) || 0;

    return `• ${p.name} — Rs. ${Number(p.price).toLocaleString()}`;

  }).join("\n");


  const message =
`🛍️ *Baby World New Order*

${items}

💰 *Total: Rs. ${total.toLocaleString()}*

Please confirm my order and availability.

Thank you!`;


  window.open(
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};


render();
updateCart();
