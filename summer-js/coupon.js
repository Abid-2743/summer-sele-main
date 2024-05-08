/*
@ get product name by id
@ get product price by id
@ show product in ul > li list wise
*/
// first-car


function parsePrice(priceText) {
  return parseFloat(priceText.replace("TK", "").trim());
}

function updateDOMElement(id, value, isCurrency = true) {
  const formattedValue = isCurrency
    ? `${value.toFixed(2)} TK`
    : value.toFixed(2);
  document.getElementById(id).textContent = formattedValue;
}

document.getElementById("first-card").addEventListener("click", function () {
  const productName = document
    .getElementById("products-name")
    .textContent.trim();
  const productPrice = parsePrice(
    document.getElementById("products-price").textContent
  );

  // Update the product list
  const productList = document.getElementById("product-list");
  const newLi = document.createElement("li");
  newLi.innerText = `${productName} - ${productPrice.toFixed(2)} TK`;
  productList.appendChild(newLi);

  // Update the total price
  const totalPriceElement = document.getElementById("total-price");
  let currentTotal = parsePrice(totalPriceElement.textContent) || 0;
  currentTotal += productPrice;
  updateDOMElement("total-price", currentTotal);

  // Enable the purchase and coupon button if applicable
  document.getElementById("purchase").disabled = false;
  checkCouponEligibility(currentTotal);
});

// second card
document.getElementById("second-card").addEventListener("click", function () {
  const productName = document
    .getElementById("second-products-name")
    .textContent.trim();
  const productPrice = parsePrice(
    document.getElementById("second-products-price").textContent
  );

  // Update the product list
  const productList = document.getElementById("product-list");
  const newLi = document.createElement("li");
  newLi.innerText = `${productName} - ${productPrice.toFixed(2)} TK`;
  productList.appendChild(newLi);

  // Update the total price
  const totalPriceElement = document.getElementById("total-price");
  let currentTotal = parsePrice(totalPriceElement.textContent) || 0;
  currentTotal += productPrice;
  updateDOMElement("total-price", currentTotal);

  // Enable the purchase and coupon button if applicable
  document.getElementById("purchase").disabled = false;
  checkCouponEligibility(currentTotal);
});

// third card
document.getElementById("Three-card").addEventListener("click", function () {
    const productName = document
      .getElementById("Three-products-name")
      .textContent.trim();
    const productPrice = parsePrice(
      document.getElementById("Three-products-price").textContent
    );
  
    // Update the product list
    const productList = document.getElementById("product-list");
    const newLi = document.createElement("li");
    newLi.innerText = `${productName} - ${productPrice.toFixed(2)} TK`;
    productList.appendChild(newLi);
  
    // Update the total price
    const totalPriceElement = document.getElementById("total-price");
    let currentTotal = parsePrice(totalPriceElement.textContent) || 0;
    currentTotal += productPrice;
    updateDOMElement("total-price", currentTotal);
  
    // Enable the purchase and coupon button if applicable
    document.getElementById("purchase").disabled = false;
    checkCouponEligibility(currentTotal);
  });

// Four card

document.getElementById("Four-card").addEventListener("click", function () {
    const productName = document
      .getElementById("Four-products-name")
      .textContent.trim();
    const productPrice = parsePrice(
      document.getElementById("Four-products-price").textContent
    );
  
    // Update the product list
    const productList = document.getElementById("product-list");
    const newLi = document.createElement("li");
    newLi.innerText = `${productName} - ${productPrice.toFixed(2)} TK`;
    productList.appendChild(newLi);
  
    // Update the total price
    const totalPriceElement = document.getElementById("total-price");
    let currentTotal = parsePrice(totalPriceElement.textContent) || 0;
    currentTotal += productPrice;
    updateDOMElement("total-price", currentTotal);
  
    // Enable the purchase and coupon button if applicable
    document.getElementById("purchase").disabled = false;
    checkCouponEligibility(currentTotal);
  });

// Five Card

document.getElementById("Five-card").addEventListener("click", function () {
    const productName = document
      .getElementById("Five-products-name")
      .textContent.trim();
    const productPrice = parsePrice(
      document.getElementById("Five-products-price").textContent
    );
  
    // Update the product list
    const productList = document.getElementById("product-list");
    const newLi = document.createElement("li");
    newLi.innerText = `${productName} - ${productPrice.toFixed(2)} TK`;
    productList.appendChild(newLi);
  
    // Update the total price
    const totalPriceElement = document.getElementById("total-price");
    let currentTotal = parsePrice(totalPriceElement.textContent) || 0;
    currentTotal += productPrice;
    updateDOMElement("total-price", currentTotal);
  
    // Enable the purchase and coupon button if applicable
    document.getElementById("purchase").disabled = false;
    checkCouponEligibility(currentTotal);
  });

//   Six Card
document.getElementById("Six-card").addEventListener("click", function () {
    const productName = document
      .getElementById("Six-products-name")
      .textContent.trim();
    const productPrice = parsePrice(
      document.getElementById("Six-products-price").textContent
    );
  
    // Update the product list
    const productList = document.getElementById("product-list");
    const newLi = document.createElement("li");
    newLi.innerText = `${productName} - ${productPrice.toFixed(2)} TK`;
    productList.appendChild(newLi);
  
    // Update the total price
    const totalPriceElement = document.getElementById("total-price");
    let currentTotal = parsePrice(totalPriceElement.textContent) || 0;
    currentTotal += productPrice;
    updateDOMElement("total-price", currentTotal);
  
    // Enable the purchase and coupon button if applicable
    document.getElementById("purchase").disabled = false;
    checkCouponEligibility(currentTotal);
  });


//   Seven Card


document.getElementById("Seven-card").addEventListener("click", function () {
    const productName = document
      .getElementById("Seven-products-name")
      .textContent.trim();
    const productPrice = parsePrice(
      document.getElementById("Seven-products-price").textContent
    );
  
    // Update the product list
    const productList = document.getElementById("product-list");
    const newLi = document.createElement("li");
    newLi.innerText = `${productName} - ${productPrice.toFixed(2)} TK`;
    productList.appendChild(newLi);
  
    // Update the total price
    const totalPriceElement = document.getElementById("total-price");
    let currentTotal = parsePrice(totalPriceElement.textContent) || 0;
    currentTotal += productPrice;
    updateDOMElement("total-price", currentTotal);
  
    // Enable the purchase and coupon button if applicable
    document.getElementById("purchase").disabled = false;
    checkCouponEligibility(currentTotal);
  });


//   Nine Card
document.getElementById("Nine-card").addEventListener("click", function () {
    const productName = document
      .getElementById("Nine-products-name")
      .textContent.trim();
    const productPrice = parsePrice(
      document.getElementById("Nine-products-price").textContent
    );
  
    // Update the product list
    const productList = document.getElementById("product-list");
    const newLi = document.createElement("li");
    newLi.innerText = `${productName} - ${productPrice.toFixed(2)} TK`;
    productList.appendChild(newLi);
  
    // Update the total price
    const totalPriceElement = document.getElementById("total-price");
    let currentTotal = parsePrice(totalPriceElement.textContent) || 0;
    currentTotal += productPrice;
    updateDOMElement("total-price", currentTotal);
  
    // Enable the purchase and coupon button if applicable
    document.getElementById("purchase").disabled = false;
    checkCouponEligibility(currentTotal);
  });
  



//   Eight Card
document.getElementById("Eight-card").addEventListener("click", function () {
    const productName = document
      .getElementById("Eight-products-name")
      .textContent.trim();
    const productPrice = parsePrice(
      document.getElementById("Eight-products-price").textContent
    );
  
    // Update the product list
    const productList = document.getElementById("product-list");
    const newLi = document.createElement("li");
    newLi.innerText = `${productName} - ${productPrice.toFixed(2)} TK`;
    productList.appendChild(newLi);
  
    // Update the total price
    const totalPriceElement = document.getElementById("total-price");
    let currentTotal = parsePrice(totalPriceElement.textContent) || 0;
    currentTotal += productPrice;
    updateDOMElement("total-price", currentTotal);
  
    // Enable the purchase and coupon button if applicable
    document.getElementById("purchase").disabled = false;
    checkCouponEligibility(currentTotal);
  });
  


// coupon functionality
function checkCouponEligibility(currentTotal) {
    const couponButton = document.getElementById("coupon-apply");
    couponButton.disabled = currentTotal < 200;
  }
document.getElementById("coupon-apply").addEventListener("click", function () {
  const couponCode = document.getElementById("coupon").value.trim();
  const totalElement = document.getElementById("total-price");
  const currentTotal = parsePrice(totalElement.textContent);
  if (currentTotal > 200) {
    if (couponCode === "SELL200") {
      alert("successfully proceed your coupon code.");
      const discountAmount = currentTotal * 0.2;
      const newTotal = currentTotal - discountAmount;
      updateDOMElement("Discount-price", discountAmount);
      updateDOMElement("Total-discount-price", newTotal);
      updateDOMElement("Total-discount-price", newTotal);
      this.disabled = true;
    } else {
      alert("something went wrong! please check your coupon code.");
    }
    this.disabled = true;
  } else {
    this.disabled = true;
  }
});
