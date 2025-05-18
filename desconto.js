function toggleDiscount() {
  const discountBody = document.getElementById("apply-discount-body");
  const icon = document.getElementById("toggle-icon");

  if (
    discountBody.style.display === "none" ||
    discountBody.style.display === ""
  ) {
    discountBody.style.display = "block";
    icon.classList.add("bx-chevron-up");
    icon.classList.remove("bx-chevron-down");
  } else {
    discountBody.style.display = "none";
    icon.classList.add("bx-chevron-down");
    icon.classList.remove("bx-chevron-up");
  }
}
const discontCupons = {
  DESCONTO10: 0.1,
  DESCONTO20: 0.2,
  DESCONTO50: 0.5,
};
function applyDiscount() {
  const discountCode = document
    .getElementById("discount-code")
    .value.trim()
    .toUpperCase();

  const discountMessageElement = document.getElementById("discount-message");
  const totalPriceElement = document.getElementById("total-price");

  if (discontCupons[discountCode]) {
    const discount = discontCupons[discountCode];
    const originalPrice = 1200;
    const discountedPrice = originalPrice * (1 - discount);

    totalPriceElement.innerText = `Preço Total: R$ ${discountedPrice.toFixed(
      2
    )}`;
    discountMessageElement.style.color = "green";
    discountMessageElement.innerText = `Cupom de desconto ${discountCode} aplicado!`;
    localStorage.setItem("discount", discountCode);
  } else {
    discountMessageElement.style.color = "red";
    discountMessageElement.innerText = "Cupom Inválido";
    document.getElementById("discount-code").value = "";
  }
}
function checkStoredDiscount() {
  const storedDiscount = localStorage.getItem("discount");
  const discountMessageElement = document.getElementById("discount-message");

  if (storedDiscount) {
    localStorage.removeItem("discount");
  }
  discountMessageElement.innerText = "";
}
window.onload = checkStoredDiscount();
