const WHATSAPP="923099480023";

const products=[
{id:1,name:"Mint Party Frock",category:"Clothes",price:3000,oldPrice:4000,age:"5–8 years",icon:"👗",image:"WhatsApp Image 2026-08-18 at 12.51.28 AM.jpeg"},
  {id:1,name:"Baby Boys 4-piece suit set",category:"Clothes",price:2000,oldprice:4000,age:"2-4 years",icon:"🩳👕",image:"WhatsApp Image 2026-08-15 at 9.12.49 PM.jpeg"},
  {id:2,name:"Brown Baby Shoes",category:"Shoes",price:999,age:"Newborn–1 year",icon:"👟",image:"WhatsApp Image 2026-08-14 at 10.39.45 PM.jpeg"},
{id:3,name:"Brown Baby Shoes",category:"Shoes",price:999,age:"Newborn–1 year",icon:"👟",image:"WhatsApp Image 2026-08-14 at 10.39.47 PM.jpeg"},
{id:7,name:"Brown Baby Shoes",category:"Shoes",price:999,age:"Newborn–1 year",icon:"👟",image:"WhatsApp Image 2026-08-14 at 10.39.48 PM.jpeg"},
  
  {id:4,name:"Product 4",category:"Toys",icon:"🧸"},
  {id:5,name:"Product 5",category:"Accessories",icon:"🍼"},
{id:6,name:"Red Girls Party Frock With Shoes",category:"Clothes",price:4500,oldPrice:6000,age:"4-8 years",icon:"👗",image:"ChatGPT Image Aug 20, 2026, 12_24_41 AM.png"},
  {id:7,name:"Product 7",category:"Shoes",icon:"👟"},
  {id:8,name:"Product 8",category:"Toys",icon:"🧸"}
];

let cart=[];
let activeFilter="All";

const productsEl=document.getElementById("products");
const search=document.getElementById("search");
const cartCount=document.getElementById("cartCount");
const drawer=document.getElementById("cartDrawer");
const overlay=document.getElementById("overlay");
const cartItems=document.getElementById("cartItems");


function render(){
  const q=search.value.trim().toLowerCase();

  const list=products.filter(p=>
    (activeFilter==="All"||p.category===activeFilter) &&
    `${p.name} ${p.category}`.toLowerCase().includes(q)
  );

  productsEl.innerHTML=list.map(p=>`
    <article class="product">

      <div class="product-pic" onclick="openImage('${p.image || ""}')">
        ${p.image
          ? `<img src="${p.image}" alt="${p.name}">`
          : p.icon
        }
      </div>

      <h3>${p.name}</h3>

      <p>${p.category} • ${p.age || ""}</p>

      <div class="price">
        <span>Rs. ${p.price || 0}</span>
        ${p.oldPrice ? `<del>Rs. ${p.oldPrice}</del>` : ""}
      </div>

      <button class="primary-btn" onclick="addToCart(${p.id})">
        Add to Cart
      </button>

    </article>
  `).join("") || `<div class="empty">No products found.</div>`;
}
  
function openImage(image){
  if(!image)return;

  const box=document.createElement("div");
  box.className="image-popup";

  box.innerHTML=`
    <div class="image-popup-bg" onclick="this.parentElement.remove()"></div>
    <img src="${image}" onclick="event.stopPropagation()">
    <button onclick="this.parentElement.remove()">×</button>
  `;

  document.body.appendChild(box);
}
function addToCart(id){
  const product=products.find(p=>p.id===id);
  cart.push(product);
  updateCart();
  openCart();
}

function updateCart(){
  cartCount.textContent=cart.length;
  if(!cart.length){
    cartItems.innerHTML=`<p class="muted">Your cart is empty.</p>`;
    return;
  }
  cartItems.innerHTML=cart.map((p,i)=>`
    <div class="cart-item">
      <span>${p.icon} <b>${p.name}</b></span>
      <button onclick="removeFromCart(${i})">Remove</button>
    </div>
  `).join("");
}

function removeFromCart(i){
  cart.splice(i,1);
  updateCart();
}

function openCart(){
  drawer.classList.add("open");
  overlay.classList.add("show");
}
function closeCart(){
  drawer.classList.remove("open");
  overlay.classList.remove("show");
}

document.getElementById("filters").addEventListener("click",e=>{
  if(!e.target.dataset.filter)return;
  activeFilter=e.target.dataset.filter;
  document.querySelectorAll("#filters button").forEach(b=>
    b.classList.toggle("active",b===e.target)
  );
  render();
});

document.querySelectorAll(".categories button").forEach(button=>{
  button.addEventListener("click",()=>{
    activeFilter=button.dataset.category;
    document.querySelectorAll("#filters button").forEach(b=>
      b.classList.toggle("active",b.dataset.filter===activeFilter)
    );
    document.getElementById("shop").scrollIntoView({behavior:"smooth"});
    render();
  });
});

search.addEventListener("input",render);
document.getElementById("cartBtn").onclick=openCart;
document.getElementById("closeCart").onclick=closeCart;
overlay.onclick=closeCart;

document.getElementById("whatsappOrder").onclick=()=>{
  if(!cart.length)return alert("Cart is empty.");
  const names=cart.map(p=>`• ${p.name}`).join("\n");
  const message=`🛍️ Baby World New Order\n\n${names}\n\nPlease confirm product prices and availability.`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,"_blank");
};

render();
updateCart();
