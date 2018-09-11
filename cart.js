// cart stuff using localStorage

function getCart() {
  var cart = localStorage.getItem("cart");
  if (cart == null) {
    return [];
  }
  return JSON.parse(cart);
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(pid) {
  var cart = getCart();
  // check if already in cart
  var found = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id == pid) {
      cart[i].qty = cart[i].qty + 1;
      found = true;
    }
  }
  if (found == false) {
    cart.push({ id: pid, qty: 1 });
  }
  saveCart(cart);
  alert("Added to cart!");
}

function renderCart() {
  var cart = getCart();
  var html = "";

  if (cart.length == 0) {
    document.getElementById("cartTable").innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  html += "<table>";
  html += "<tr><th>Product</th><th>Price</th><th>Qty</th></tr>";

  for (var i = 0; i < cart.length; i++) {
    var p = getProductById(cart[i].id);
    html += "<tr>";
    html += "<td>" + p.name + "</td>";
    html += "<td>$" + p.price + "</td>";
    html += "<td>" + cart[i].qty + "</td>";
    html += "</tr>";
  }

  html += "</table>";

  document.getElementById("cartTable").innerHTML = html;
}
