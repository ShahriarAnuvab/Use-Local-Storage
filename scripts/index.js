let count = 0;
const addProduct = () => {
  const productField = document.getElementById("product");
  const product = productField.value;
  productField.value = "";
  const quantityField = document.getElementById("quantity");
  const quantity = quantityField.value;
  quantityField.value = "";
  //   console.log(product, quantity);
  displayCart(product, quantity);
  saveLocalStorage(product, quantity);
};
const displayCart = (product, quantity) => {
  count += 1;
  const cartContainer = document.getElementById("cartContainer");
  const p = document.createElement("p");
  p.innerHTML = `<p class="text-lg my-2 border rounded-lg border-black w-2/5 md:w-1/5 mx-auto p-2"> ${count}. <span class="font-bold">Product:</span> ${product} <br> <span class="font-bold">Quantity:</span> ${quantity}</p>`;
  cartContainer.appendChild(p);
};

const getLocalItem = () => {
  let cart = {};
  const storedItem = localStorage.getItem("cart");
  if (storedItem) {
    cart = JSON.parse(storedItem);
  }
  return cart;
};

const saveLocalStorage = (product, quantity) => {
  const cart = getLocalItem();
  cart[product] = quantity;
  const cartToString = JSON.stringify(cart);
  localStorage.setItem("cart", cartToString);
  // console.log(cart)
};
const showSaveCart = () =>{
    const SaveCart = getLocalItem();
    for(product in SaveCart){
        const quantity = SaveCart[product];
        console.log(product, quantity);
        displayCart(product, quantity)

    }
}
showSaveCart()
