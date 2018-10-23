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

function removeFromCart(pid) {
  var cart = getCart();
  var newCart = [];
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id != pid) {
      newCart.push(cart[i]);
    }
  }
  saveCart(newCart);
  renderCart();
}

function renderCart() {
  var cart = getCart();
  var html = "";

  if (cart.length == 0) {
    document.getElementById("cartTable").innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  html += "<table>";
  html += "<tr><th>Product</th><th>Price</th><th>Qty</th><th>Total</th><th></th></tr>";

  var grandTotal = 0;
  for (var i = 0; i < cart.length; i++) {
    var p = getProductById(cart[i].id);
    var lineTotal = p.price * cart[i].qty;
    grandTotal = grandTotal + lineTotal;

    html += "<tr>";
    html += "<td>" + p.name + "</td>";
    html += "<td>$" + p.price + "</td>";
    html += "<td>" + cart[i].qty + "</td>";
    html += "<td>$" + lineTotal.toFixed(2) + "</td>";
    html += '<td><button onclick="removeFromCart(' + p.id + ')">Remove</button></td>';
    html += "</tr>";
  }

  html += "</table>";
  html += '<h3 style="text-align:right;">Grand Total: $' + grandTotal + '</h3>';

  document.getElementById("cartTable").innerHTML = html;
}

function checkout() {
  var cart = getCart();
  if (cart.length == 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Order placed!");
  localStorage.removeItem("cart");
  renderCart();
}
