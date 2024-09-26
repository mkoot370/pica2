document.addEventListener("DOMContentLoaded", () => {
  const cartItems = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");
  let totalPrice = 0;

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (event) => {
      const card = event.target.closest(".card");
      const itemName = card.querySelector(".card-text").textContent;
      const itemPrice = parseFloat(card.querySelector("small").textContent);

      // Добавить товар в корзину
      const listItem = document.createElement("li");
      listItem.textContent = `${itemName} - ${itemPrice} eiro`;
      listItem.style.cursor = "pointer";
      listItem.addEventListener("click", () => {
        // Удалить товар из корзины
        cartItems.removeChild(listItem);
        totalPrice -= itemPrice;
        totalPriceElement.textContent = totalPrice.toFixed(2);
      });
      cartItems.appendChild(listItem);

      totalPrice += itemPrice;
      totalPriceElement.textContent = totalPrice.toFixed(2);
    });
  });
});
