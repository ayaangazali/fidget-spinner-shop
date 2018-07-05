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
