let cartCount = 0;
let cartItems = [];

function addToCart(title, price) {
  cartItems.push({ title, price });
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
  updateCartModal();
}

function updateCartModal() {
  const cartList = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("cart-total");

  cartList.innerHTML = "";
  let total = 0;

  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      ${item.title}
      <span>₹${item.price}</span>
    `;
    cartList.appendChild(li);
    total += item.price;
  });

  totalDisplay.textContent = total;
}
