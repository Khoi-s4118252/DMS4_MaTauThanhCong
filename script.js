const cartCount = document.getElementById("cart-count");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

let count = 0;

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    count += 1;
    cartCount.textContent = String(count);
    button.textContent = "Added";
    button.disabled = true;
  });
});
