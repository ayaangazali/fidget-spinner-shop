// list of all the spinners we sell
var products = [
  { id: 1, name: "Classic Tri-Spinner", price: 9.99, image: "images/spinner1.png" },
  { id: 2, name: "Rainbow Metal Spinner", price: 14.99, image: "images/spinner2.png" },
  { id: 3, name: "Glow in the Dark Spinner", price: 12.50, image: "images/spinner3.png" },
  { id: 4, name: "Gold Premium Spinner", price: 19.99, image: "images/spinner4.png" },
  { id: 5, name: "Black Ninja Spinner", price: 11.99, image: "images/spinner5.png" },
  { id: 6, name: "Camo Army Spinner", price: 13.99, image: "images/spinner6.png" },
  { id: 7, name: "LED Light Up Spinner", price: 16.99, image: "images/spinner7.png" },
  { id: 8, name: "Mini Keychain Spinner", price: 7.99, image: "images/spinner8.png" }
];

function getProductById(pid) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].id == pid) {
      return products[i];
    }
  }
  return null;
}
