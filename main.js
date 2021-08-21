//Update Price
function changePriceValue(updatePriceSelector, updateValue) {
  let oldPrice = document.querySelector(updatePriceSelector);
  let oldPriceValue = oldPrice.innerText;
  oldPrice.innerHTML = updateValue;
  calculation();
}

//Memory Update Price
document.querySelector("#memory8GB").addEventListener("click", function () {
  changePriceValue("#memoryCoast", 0);
});
document.querySelector("#memory16GB").addEventListener("click", function () {
  changePriceValue("#memoryCoast", 180);
});

//Stroage Update Price
document.querySelector("#storage256GB").addEventListener("click", function () {
  changePriceValue("#storageCoast", 0);
});
document.querySelector("#storage512GB").addEventListener("click", function () {
  changePriceValue("#storageCoast", 100);
});
document.querySelector("#storage1TB").addEventListener("click", function () {
  changePriceValue("#storageCoast", 180);
});

//Delivery Coast
document.querySelector("#freeDelivery").addEventListener("click", function () {
  changePriceValue("#deliveryCoast", 0);
});
document.querySelector("#coastDelivery").addEventListener("click", function () {
  changePriceValue("#deliveryCoast", 20);
});

let oldTotalCoast = document.querySelector("#totalPrice");
let innerTotalPrice2 = document.querySelector("#innerTotalPrice2");
let totalPrice2 = 1299;
function calculation() {
  let memoryCoast = document.querySelector("#memoryCoast");
  let storageCoast = document.querySelector("#storageCoast");
  let deliveryCoast = document.querySelector("#deliveryCoast");
  totalPrice2 = oldTotalCoast.innerText =
    1299 +
    parseInt(memoryCoast.innerText) +
    parseInt(storageCoast.innerText) +
    parseInt(deliveryCoast.innerText);
  oldTotalCoast.innerText =
    1299 +
    parseInt(memoryCoast.innerText) +
    parseInt(storageCoast.innerText) +
    parseInt(deliveryCoast.innerText);
  innerTotalPrice2.innerText =
    1299 +
    parseInt(memoryCoast.innerText) +
    parseInt(storageCoast.innerText) +
    parseInt(deliveryCoast.innerText);
  console.log("total", totalPrice2);
}

//Adding coupon
document.getElementById("cuponButton").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("total 2", totalPrice2);
  const typedCupon = document.getElementById("cuponInput").value;
  if (typedCupon == "stevekaku") {
    let finalAmmout = parseInt(totalPrice2) - parseInt(totalPrice2) * 0.2;
    innerTotalPrice2.innerText = finalAmmout;
    if (totalPrice2 === 1299) {
      innerTotalPrice2.innerText = 1299 - parseInt(totalPrice2) * 0.2;
    }
    typedCupon.value = "";
  } else {
    alert("invalid promo code");
    typedCupon.value = "";
  }
});
