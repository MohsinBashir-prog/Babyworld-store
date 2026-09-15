const WHATSAPP = "923099480023";

const products = [
  {
    id: 1,
    name: "Mint Green Girls Party Frock",
    category: "Clothes",
    price: 3000,
    oldPrice: 4000,
    age: "5–8 years",
    icon: "👗",
    image: "WhatsApp Image 2026-08-18 at 12.51.28 AM.jpeg"
  },
  {
    id: 2,
    name: "Baby Boys 4-Piece Suit Set",
    category: "Clothes",
    price: 2000,
    oldPrice: 4000,
    age: "2–4 years",
    icon: "🩳👕",
    image: "WhatsApp Image 2026-08-15 at 9.12.49 PM.jpeg"
  },
  {
    id: 3,
    name: "Kids Track Suit Set",
    category: "Clothes",
    price: 2000,
    oldPrice: 3000,
    age: "6 months–4 years",
    icon: "👕",
    image: "ChatGPT Image Aug 20, 2026, 11_28_46 PM.png"
  },
  {
    id: 4,
    name: "Brown Baby Shoes for Newborns",
    category: "Shoes",
    price: 999,
    age: "Newborn–1 year",
    icon: "👟",
    image: "WhatsApp Image 2026-08-14 at 10.39.45 PM.jpeg"
  },
  {
    id: 5,
    name: "Brown Baby Shoes for Infants",
    category: "Shoes",
    price: 999,
    age: "Newborn–1 year",
    icon: "👟",
    image: "WhatsApp Image 2026-08-14 at 10.39.47 PM.jpeg"
  },
  {
    id: 6,
    name: "Brown Baby Shoes for Little Boys & Girls",
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
    age: "4–8 years",
    icon: "👗",
    image: "ChatGPT Image Aug 20, 2026, 12_24_41 AM.png"
  },
  {
    id: 8,
    name: "Girls Maxi Dress",
    category: "Clothes",
    price: 4495,
    oldPrice: 7000,
    age: "4–12 years",
    icon: "👗",
    image: "ChatGPT Image Aug 20, 2026, 11_39_17 PM.png"
  },
  {
    id: 13,
    name: "Girls Maxi Dress",
    category: "Clothes",
    price: 9000,
    oldPrice: 12000,
    age: "8–12 years",
    icon: "👗",
    image: "WhatsApp Image 2026-08-21 at 11.21.14 PM.jpeg"
  },
  {
    id: 14,
    name: "Girls Party Suit",
    category: "Clothes",
    price: 3000,
    oldPrice: 4500,
    age: "4–8 years",
    icon: "👗",
    image: "WhatsApp Image 2026-08-21 at 11.21.15 PM (1).jpeg"
  },
  {
    id: 15,
    name: "Girls Sharara Suit",
    category: "Clothes",
    price: 3500,
    oldPrice: 4500,
    age: "4–8 years",
    icon: "👗",
    image: "WhatsApp Image 2026-08-21 at 11.21.15 PM.jpeg"
  },
    {
    id: 16,
    name: "Kids Poppa & Markhor Eid Outfit Set 1–5Y",
    category: "Clothes",
    price: 1785,
    oldprice: 2500,
    age: "1–5 years",
    icon: "👗",
    image: "markaz-kids-poppa-markhor-eid-outfit-set-1-5y-pitch.png"
  },
  {
  id: 17,
  name: "Kids Fleece Dino Print Suit Yellow Orange Blue red",
  category: "Clothes",
  price: 1602,
  oldPrice: 2000,
  age: "1-5 years",
  icon: "👕",
  image: "markaz-kids-fleece-dino-print-suit-yellow-orange-blue-red-1-5yr-pitch.png"
},
  {
    id:18,
    name:"2-pcs-girl-s-stitched-cotton-jersey-printed-pajama-and-shirt",
    category: "Clothes",
    price: 2230,
    age: "1-6 years",
    icon:"👗",
    image:"markaz-2-pcs-girl-s-stitched-cotton-jersey-printed-pajama-and-shirt-pitch.png"
  },
  {
    id:19,
    name:"girl-s-stitched-jersey-printed-pajama-and-shirt",
    category:"Clothes",
    price:2050,
    age:"1-6 years",
    icon:"👗",
    image:"markaz-2-pcs-girl-s-stitched-jersey-printed-pajama-and-shirt-pitch.png"
  },
  {
    id:20,
    name:"black-mesh-floral-embroidered-tutu-dress-for-girls",
    category:"Clothes",
    price: 6003,
    age:"8-12 years",
    icon:"👗",
    image:"markaz-black-mesh-floral-embroidered-tutu-dress-for-girls-pitch.png"
  },
  {
    id:21,
    name:"girls-brown-button-co-ord-set-wide-leg-pants",
    category:"Clothes",
    price: 2050,
    age:"5-10 years",
    icon:"👗",
    image:"markaz-girls-brown-button-co-ord-set-wide-leg-pants-pitch.png"
  },
  {
    id:22,
    name:"girls-cotton-tracksuit-pink",
    category:"Clothes",
    price: 2999,
    age:"1-4 years",
    icon:"👗",
    image:"markaz-girls-cotton-tracksuit-pink-1-2-years-3-4-years-pitch.png"
  },
  {
    id:23,
    name:"girls-georgette-bow-top-maxi-set-green-white",
    category:"Clothes",
    price: 4752,
    age:"5-12 years",
    icon:"👗",
    image:"markaz-girls-georgette-bow-top-maxi-set-green-white-pitch.png"
  },
  {
    id:24,
    name:"kids-brown-fleece-jacket-trouser-set-2pcs",
    category:"Clothes",
    price: 3672,
    age:"2-6 yaers",
    icon:"👗",
    image:"markaz-kids-brown-fleece-jacket-trouser-set-2pcs-pitch.png"
  },
  {
    id:25,
    name:"kids-sleeveless-ruffled-bow-dress-butterfly-print-color",
    category:"Clothes",
    price: 2897,
    age:"6 months-3 years",
    icon:"👗",
    image:"arkaz-kids-sleeveless-ruffled-bow-dress-butterfly-print-multi-color-pitch.png"
  },
  {
    id:26,
    name:"princess-dress-teal-floral-lace-embroidery",
    category:"Clothes",
    price: 6061,
    age:"6-12 years",
    icon:"👗",
    image:"markaz-princess-dress-teal-gray-floral-lace-embroidery-pitch.png"
  },
  {
    id:27,
    name:"red-fleece-tracksuit-for-kids-1-10-years-heart-rose-print",
    category:"Clothes",
    price: 2502,
    age:"1-10 years",
    icon:"👕",
   imege:"markaz-red-fleece-tracksuit-for-kids-1-10-years-heart-rose-print-pitch.png"
  },
 {
    id: 9,
    name: "Kids Toy",
    category: "Toys",
    price: 0,
    icon: "🧸"
  },
  {
    id: 10,
    name: "Baby Feeding Accessories",
    category: "Accessories",
    price: 0,
    icon: "🍼"
  },
  {
    id: 11,
    name: "Kids Shoes",
    category: "Shoes",
    price: 0,
    icon: "👟"
  },
  {
    id: 12,
    name: "Kids Toy",
    category: "Toys",
    price: 0,
    icon: "🧸"
  }
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
// Product SEO Schema
const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Baby World Store Products",
  "itemListElement": products
    .filter(p => p.price && p.image)
    .map((p, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": p.name,
        "image": new URL(p.image, window.location.href).href,
        "category": p.category,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "PKR",
          "price": p.price,
          "availability": "https://schema.org/InStock",
          "url": window.location.href
        }
      }
    }))
};

const schemaScript = document.createElement("script");
schemaScript.type = "application/ld+json";
schemaScript.textContent = JSON.stringify(productSchema);
document.head.appendChild(schemaScript);


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
