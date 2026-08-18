const WHATSAPP="923099480023";

const products=[
  {id:1,name:"Product 1",category:"Clothes",icon:"👗"},
  {id:2,name:"Product 2",category:"Clothes",icon:"👶"},
  {id:3,name:"Product 3",category:"Shoes",icon:"👟"},
  {id:4,name:"Product 4",category:"Toys",icon:"🧸"},
  {id:5,name:"Product 5",category:"Accessories",icon:"🍼"},
  {id:6,name:"Product 6",category:"Clothes",icon:"👕"},
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
      <div class="product-pic">${p.icon}</div>
      <h3>${p.name}</h3>
      <p>${p.category} • Picture and price will be added later.</p>
      <button class="primary-btn" onclick="addToCart(${p.id})">Add to Cart</button>
    </article>
  `).join("") || `<div class="empty">No products found.</div>`;
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
