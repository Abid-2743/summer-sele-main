// // Function to parse price from a string (assuming price is followed by 'TK')
// // first card
// function parsePrice(priceText) {
//   return parseFloat(priceText.replace('TK', '').trim());
// }

// // Function to update DOM elements with new values
// function updateDOMElement(id, value, isCurrency = true) {
//   const formattedValue = isCurrency ? `${value.toFixed(2)} TK` : value.toFixed(2);
//   document.getElementById(id).textContent = formattedValue;
// }

// // Adding a product and updating the cart
// document.getElementById('first-card').addEventListener('click', function () {
//   const productName = document.getElementById('products-name').textContent.trim();
//   const productPrice = parsePrice(document.getElementById('products-price').textContent);

//   // Update the product list
//   const productList = document.getElementById('product-list');
//   const newLi = document.createElement('li');
//   newLi.innerText = `${productName} - ${productPrice.toFixed(2)} TK`;
//   productList.appendChild(newLi);

//   // Update the total price
//   const totalPriceElement = document.getElementById('total-price');
//   let currentTotal = parsePrice(totalPriceElement.textContent) || 0;
//   currentTotal += productPrice;
//   updateDOMElement('total-price', currentTotal);

//   // Enable the purchase and coupon button if applicable
//   document.getElementById('purchase').disabled = false;
//   checkCouponEligibility(currentTotal);
// });

// // Check if the coupon should be enabled based on the total amount
// function checkCouponEligibility(currentTotal) {
//   const couponButton = document.getElementById('coupon-apply');
//   couponButton.disabled = currentTotal < 200;
// }

// // Coupon application
// document.getElementById('coupon-apply').addEventListener('click', function () {
//   const couponCode = document.getElementById('coupon').value.trim();
//   if (couponCode === 'SELL200') {
//       const totalElement = document.getElementById('total-price');
//       const currentTotal = parsePrice(totalElement.textContent);
//       const discountAmount = currentTotal * 0.20;  // Calculate 20% discount
//       const newTotal = currentTotal - discountAmount;


//       updateDOMElement('Discount-price', discountAmount);
//       updateDOMElement('Total-discount-price', newTotal); // Shows final price after discount
//       updateDOMElement('Total-discount-price', newTotal); // Optionally update the total price displayed to the new total

//       // alert('20% discount applied successfully!');
//       this.disabled = true; // Disable further use of coupon
//   } else {
//       // alert('Invalid coupon');
//   }
//   console.log(newTotal);
// });

// document.getElementById('reload-web').addEventListener('click', function () {
//   window.location.href = 'index.html';
// });

// // second card

// function parsePrice(priceText) {
//   return parseFloat(priceText.replace('TK', '').trim());
// }

// // Function to update DOM elements with new values
// function updateDOMElement(id, value, isCurrency = true) {
//   const formattedValue = isCurrency ? `${value.toFixed(2)} TK` : value.toFixed(2);
//   document.getElementById(id).textContent = formattedValue;
// }

// // Adding a product and updating the cart
// document.getElementById('second-card').addEventListener('click', function () {
//   const productName = document.getElementById('second-products-name').textContent.trim();
//   const productPrice = parsePrice(document.getElementById('second-products-price').textContent);

//   // Update the product list
//   const productList = document.getElementById('product-list');
//   const newLi = document.createElement('li');
//   newLi.innerText = `${productName} - ${productPrice.toFixed(2)} TK`;
//   productList.appendChild(newLi);

//   // Update the total price
//   const totalPriceElement = document.getElementById('total-price');
//   let currentTotal = parsePrice(totalPriceElement.textContent) || 0;
//   currentTotal += productPrice;
//   updateDOMElement('total-price', currentTotal);

//   // Enable the purchase and coupon button if applicable
//   document.getElementById('purchase').disabled = false;
//   checkCouponEligibility(currentTotal);
// });

// // Check if the coupon should be enabled based on the total amount
// function checkCouponEligibility(currentTotal) {
//   const couponButton = document.getElementById('coupon-apply');
//   couponButton.disabled = currentTotal < 200;
// }

// // Coupon application
// document.getElementById('coupon-apply').addEventListener('click', function () {
//   const couponCode = document.getElementById('coupon').value.trim();
//   if (couponCode === 'SELL200') {
//       const totalElement = document.getElementById('total-price');
//       const currentTotal = parsePrice(totalElement.textContent);
//       const discountAmount = currentTotal * 0.20;  // Calculate 20% discount
//       const newTotal = currentTotal - discountAmount;


//       updateDOMElement('Discount-price', discountAmount);
//       updateDOMElement('Total-discount-price', newTotal); // Shows final price after discount
//       updateDOMElement('Total-discount-price', newTotal); // Optionally update the total price displayed to the new total

//       // alert('20% discount applied successfully!');
//       this.disabled = true; // Disable further use of coupon
//   } else {
//       // alert('Invalid coupon');
//   }
//   console.log(newTotal);
// });



// // Three Card




// function parsePrice(priceText) {
//   return parseFloat(priceText.replace('TK', '').trim());
// }

// // Function to update DOM elements with new values
// function updateDOMElement(id, value, isCurrency = true) {
//   const formattedValue = isCurrency ? `${value.toFixed(2)} TK` : value.toFixed(2);
//   document.getElementById(id).textContent = formattedValue;
// }

// // Adding a product and updating the cart
// document.getElementById('Three-card').addEventListener('click', function () {
//   const productName = document.getElementById('Three-products-name').textContent.trim();
//   const productPrice = parsePrice(document.getElementById('Three-products-price').textContent);

//   // Update the product list
//   const productList = document.getElementById('product-list');
//   const newLi = document.createElement('li');
//   newLi.innerText = `${productName} - ${productPrice.toFixed(2)} TK`;
//   productList.appendChild(newLi);

//   // Update the total price
//   const totalPriceElement = document.getElementById('total-price');
//   let currentTotal = parsePrice(totalPriceElement.textContent) || 0;
//   currentTotal += productPrice;
//   updateDOMElement('total-price', currentTotal);

//   // Enable the purchase and coupon button if applicable
//   document.getElementById('purchase').disabled = false;
//   checkCouponEligibility(currentTotal);
// });

// // Check if the coupon should be enabled based on the total amount
// function checkCouponEligibility(currentTotal) {
//   const couponButton = document.getElementById('coupon-apply');
//   couponButton.disabled = currentTotal < 200;
// }

// // Coupon application
// document.getElementById('coupon-apply').addEventListener('click', function () {
//   const couponCode = document.getElementById('coupon').value.trim();
//   if (couponCode === 'SELL200') {
//       const totalElement = document.getElementById('total-price');
//       const currentTotal = parsePrice(totalElement.textContent);
//       const discountAmount = currentTotal * 0.20;  // Calculate 20% discount
//       const newTotal = currentTotal - discountAmount;


//       updateDOMElement('Discount-price', discountAmount);
//       updateDOMElement('Total-discount-price', newTotal); // Shows final price after discount
//       updateDOMElement('Total-discount-price', newTotal); // Optionally update the total price displayed to the new total

//       // alert('20% discount applied successfully!');
//       this.disabled = true; // Disable further use of coupon
//   } else {
//       // alert('Invalid coupon');
//   }
//   console.log(newTotal);
// });




// // Four Card

// function parsePrice(priceText) {
//   return parseFloat(priceText.replace('TK', '').trim());
// }

// // Function to update DOM elements with new values
// function updateDOMElement(id, value, isCurrency = true) {
//   const formattedValue = isCurrency ? `${value.toFixed(2)} TK` : value.toFixed(2);
//   document.getElementById(id).textContent = formattedValue;
// }

// // Adding a product and updating the cart
// document.getElementById('Four-card').addEventListener('click', function () {
//   const productName = document.getElementById('Four-products-name').textContent.trim();
//   const productPrice = parsePrice(document.getElementById('Four-products-price').textContent);

//   // Update the product list
//   const productList = document.getElementById('product-list');
//   const newLi = document.createElement('li');
//   newLi.innerText = `${productName} - ${productPrice.toFixed(2)} TK`;
//   productList.appendChild(newLi);

//   // Update the total price
//   const totalPriceElement = document.getElementById('total-price');
//   let currentTotal = parsePrice(totalPriceElement.textContent) || 0;
//   currentTotal += productPrice;
//   updateDOMElement('total-price', currentTotal);

//   // Enable the purchase and coupon button if applicable
//   document.getElementById('purchase').disabled = false;
//   checkCouponEligibility(currentTotal);
// });

// // Check if the coupon should be enabled based on the total amount
// function checkCouponEligibility(currentTotal) {
//   const couponButton = document.getElementById('coupon-apply');
//   couponButton.disabled = currentTotal < 200;
// }

// // Coupon application
// document.getElementById('coupon-apply').addEventListener('click', function () {
//   const couponCode = document.getElementById('coupon').value.trim();
//   if (couponCode === 'SELL200') {
//       const totalElement = document.getElementById('total-price');
//       const currentTotal = parsePrice(totalElement.textContent);
//       const discountAmount = currentTotal * 0.20;  // Calculate 20% discount
//       const newTotal = currentTotal - discountAmount;


//       updateDOMElement('Discount-price', discountAmount);
//       updateDOMElement('Total-discount-price', newTotal); // Shows final price after discount
//       updateDOMElement('Total-discount-price', newTotal); // Optionally update the total price displayed to the new total

//       // alert('20% discount applied successfully!');
//       this.disabled = true; // Disable further use of coupon
//   } else {
//       // alert('Invalid coupon');
//   }
//   console.log(newTotal);
// });


// // Five Card



// function parsePrice(priceText) {
//   return parseFloat(priceText.replace('TK', '').trim());
// }

// // Function to update DOM elements with new values
// function updateDOMElement(id, value, isCurrency = true) {
//   const formattedValue = isCurrency ? `${value.toFixed(2)} TK` : value.toFixed(2);
//   document.getElementById(id).textContent = formattedValue;
// }

// // Adding a product and updating the cart
// document.getElementById('Five-card').addEventListener('click', function () {
//   const productName = document.getElementById('Five-products-name').textContent.trim();
//   const productPrice = parsePrice(document.getElementById('Five-products-price').textContent);

//   // Update the product list
//   const productList = document.getElementById('product-list');
//   const newLi = document.createElement('li');
//   newLi.innerText = `${productName} - ${productPrice.toFixed(2)} TK`;
//   productList.appendChild(newLi);

//   // Update the total price
//   const totalPriceElement = document.getElementById('total-price');
//   let currentTotal = parsePrice(totalPriceElement.textContent) || 0;
//   currentTotal += productPrice;
//   updateDOMElement('total-price', currentTotal);

//   // Enable the purchase and coupon button if applicable
//   document.getElementById('purchase').disabled = false;
//   checkCouponEligibility(currentTotal);
// });

// // Check if the coupon should be enabled based on the total amount
// function checkCouponEligibility(currentTotal) {
//   const couponButton = document.getElementById('coupon-apply');
//   couponButton.disabled = currentTotal < 200;
// }

// // Coupon application
// document.getElementById('coupon-apply').addEventListener('click', function () {
//   const couponCode = document.getElementById('coupon').value.trim();
//   if (couponCode === 'SELL200') {
//       const totalElement = document.getElementById('total-price');
//       const currentTotal = parsePrice(totalElement.textContent);
//       const discountAmount = currentTotal * 0.20;  // Calculate 20% discount
//       const newTotal = currentTotal - discountAmount;


//       updateDOMElement('Discount-price', discountAmount);
//       updateDOMElement('Total-discount-price', newTotal); // Shows final price after discount
//       updateDOMElement('Total-discount-price', newTotal); // Optionally update the total price displayed to the new total

//       // alert('20% discount applied successfully!');
//       this.disabled = true; // Disable further use of coupon
//   } else {
//       // alert('Invalid coupon');
//   }
//   console.log(newTotal);
// });


// // Six Card 


// function parsePrice(priceText) {
//   return parseFloat(priceText.replace('TK', '').trim());
// }

// // Function to update DOM elements with new values
// function updateDOMElement(id, value, isCurrency = true) {
//   const formattedValue = isCurrency ? `${value.toFixed(2)} TK` : value.toFixed(2);
//   document.getElementById(id).textContent = formattedValue;
// }

// // Adding a product and updating the cart
// document.getElementById('Six-card').addEventListener('click', function () {
//   const productName = document.getElementById('Six-products-name').textContent.trim();
//   const productPrice = parsePrice(document.getElementById('Six-products-price').textContent);

//   // Update the product list
//   const productList = document.getElementById('product-list');
//   const newLi = document.createElement('li');
//   newLi.innerText = `${productName} - ${productPrice.toFixed(2)} TK`;
//   productList.appendChild(newLi);

//   // Update the total price
//   const totalPriceElement = document.getElementById('total-price');
//   let currentTotal = parsePrice(totalPriceElement.textContent) || 0;
//   currentTotal += productPrice;
//   updateDOMElement('total-price', currentTotal);

//   // Enable the purchase and coupon button if applicable
//   document.getElementById('purchase').disabled = false;
//   checkCouponEligibility(currentTotal);
// });

// // Check if the coupon should be enabled based on the total amount
// function checkCouponEligibility(currentTotal) {
//   const couponButton = document.getElementById('coupon-apply');
//   couponButton.disabled = currentTotal < 200;
// }

// // Coupon application
// document.getElementById('coupon-apply').addEventListener('click', function () {
//   const couponCode = document.getElementById('coupon').value.trim();
//   if (couponCode === 'SELL200') {
//       const totalElement = document.getElementById('total-price');
//       const currentTotal = parsePrice(totalElement.textContent);
//       const discountAmount = currentTotal * 0.20;  // Calculate 20% discount
//       const newTotal = currentTotal - discountAmount;


//       updateDOMElement('Discount-price', discountAmount);
//       updateDOMElement('Total-discount-price', newTotal); // Shows final price after discount
//       updateDOMElement('Total-discount-price', newTotal); // Optionally update the total price displayed to the new total

//       // alert('20% discount applied successfully!');
//       this.disabled = true; // Disable further use of coupon
//   } else {
//       // alert('Invalid coupon');
//   }
//   console.log(newTotal);
// });



// // Seven Card 



// function parsePrice(priceText) {
//   return parseFloat(priceText.replace('TK', '').trim());
// }

// // Function to update DOM elements with new values
// function updateDOMElement(id, value, isCurrency = true) {
//   const formattedValue = isCurrency ? `${value.toFixed(2)} TK` : value.toFixed(2);
//   document.getElementById(id).textContent = formattedValue;
// }

// // Adding a product and updating the cart
// document.getElementById('Seven-card').addEventListener('click', function () {
//   const productName = document.getElementById('Seven-products-name').textContent.trim();
//   const productPrice = parsePrice(document.getElementById('Seven-products-price').textContent);

//   // Update the product list
//   const productList = document.getElementById('product-list');
//   const newLi = document.createElement('li');
//   newLi.innerText = `${productName} - ${productPrice.toFixed(2)} TK`;
//   productList.appendChild(newLi);

//   // Update the total price
//   const totalPriceElement = document.getElementById('total-price');
//   let currentTotal = parsePrice(totalPriceElement.textContent) || 0;
//   currentTotal += productPrice;
//   updateDOMElement('total-price', currentTotal);

//   // Enable the purchase and coupon button if applicable
//   document.getElementById('purchase').disabled = false;
//   checkCouponEligibility(currentTotal);
// });

// // Check if the coupon should be enabled based on the total amount
// function checkCouponEligibility(currentTotal) {
//   const couponButton = document.getElementById('coupon-apply');
//   couponButton.disabled = currentTotal < 200;
// }

// // Coupon application
// document.getElementById('coupon-apply').addEventListener('click', function () {
//   const couponCode = document.getElementById('coupon').value.trim();
//   if (couponCode === 'SELL200') {
//       const totalElement = document.getElementById('total-price');
//       const currentTotal = parsePrice(totalElement.textContent);
//       const discountAmount = currentTotal * 0.20;  // Calculate 20% discount
//       const newTotal = currentTotal - discountAmount;


//       updateDOMElement('Discount-price', discountAmount);
//       updateDOMElement('Total-discount-price', newTotal); // Shows final price after discount
//       updateDOMElement('Total-discount-price', newTotal); // Optionally update the total price displayed to the new total

//       // alert('20% discount applied successfully!');
//       this.disabled = true; // Disable further use of coupon
//   } else {
//       // alert('Invalid coupon');
//   }
//   console.log(newTotal);
// });



// // Eight Card 



// function parsePrice(priceText) {
//   return parseFloat(priceText.replace('TK', '').trim());
// }

// // Function to update DOM elements with new values
// function updateDOMElement(id, value, isCurrency = true) {
//   const formattedValue = isCurrency ? `${value.toFixed(2)} TK` : value.toFixed(2);
//   document.getElementById(id).textContent = formattedValue;
// }

// // Adding a product and updating the cart
// document.getElementById('Eight-card').addEventListener('click', function () {
//   const productName = document.getElementById('Eight-products-name').textContent.trim();
//   const productPrice = parsePrice(document.getElementById('Eight-products-price').textContent);

//   // Update the product list
//   const productList = document.getElementById('product-list');
//   const newLi = document.createElement('li');
//   newLi.innerText = `${productName} - ${productPrice.toFixed(2)} TK`;
//   productList.appendChild(newLi);

//   // Update the total price
//   const totalPriceElement = document.getElementById('total-price');
//   let currentTotal = parsePrice(totalPriceElement.textContent) || 0;
//   currentTotal += productPrice;
//   updateDOMElement('total-price', currentTotal);

//   // Enable the purchase and coupon button if applicable
//   document.getElementById('purchase').disabled = false;
//   checkCouponEligibility(currentTotal);
// });

// // Check if the coupon should be enabled based on the total amount
// function checkCouponEligibility(currentTotal) {
//   const couponButton = document.getElementById('coupon-apply');
//   couponButton.disabled = currentTotal < 200;
// }

// // Coupon application
// document.getElementById('coupon-apply').addEventListener('click', function () {
//   const couponCode = document.getElementById('coupon').value.trim();
//   if (couponCode === 'SELL200') {
//       const totalElement = document.getElementById('total-price');
//       const currentTotal = parsePrice(totalElement.textContent);
//       const discountAmount = currentTotal * 0.20;  // Calculate 20% discount
//       const newTotal = currentTotal - discountAmount;


//       updateDOMElement('Discount-price', discountAmount);
//       updateDOMElement('Total-discount-price', newTotal); // Shows final price after discount
//       updateDOMElement('Total-discount-price', newTotal); // Optionally update the total price displayed to the new total

//       // alert('20% discount applied successfully!');
//       this.disabled = true; // Disable further use of coupon
//   } else {
//       // alert('Invalid coupon');
//   }
//   console.log(newTotal);
// });



// // Nine Card 



// function parsePrice(priceText) {
//   return parseFloat(priceText.replace('TK', '').trim());
// }

// // Function to update DOM elements with new values
// function updateDOMElement(id, value, isCurrency = true) {
//   const formattedValue = isCurrency ? `${value.toFixed(2)} TK` : value.toFixed(2);
//   document.getElementById(id).textContent = formattedValue;
// }

// // Adding a product and updating the cart
// document.getElementById('Nine-card').addEventListener('click', function () {
//   const productName = document.getElementById('Nine-products-name').textContent.trim();
//   const productPrice = parsePrice(document.getElementById('Nine-products-price').textContent);

//   // Update the product list
//   const productList = document.getElementById('product-list');
//   const newLi = document.createElement('li');
//   newLi.innerText = `${productName} - ${productPrice.toFixed(2)} TK`;
//   productList.appendChild(newLi);

//   // Update the total price
//   const totalPriceElement = document.getElementById('total-price');
//   let currentTotal = parsePrice(totalPriceElement.textContent) || 0;
//   currentTotal += productPrice;
//   updateDOMElement('total-price', currentTotal);

//   // Enable the purchase and coupon button if applicable
//   document.getElementById('purchase').disabled = false;
//   checkCouponEligibility(currentTotal);
// });

// // Check if the coupon should be enabled based on the total amount
// function checkCouponEligibility(currentTotal) {
//   const couponButton = document.getElementById('coupon-apply');
//   couponButton.disabled = currentTotal < 200;
// }

// // Coupon application
// document.getElementById('coupon-apply').addEventListener('click', function () {
//   const couponCode = document.getElementById('coupon').value.trim();
//   if (couponCode === 'SELL200') {
//       const totalElement = document.getElementById('total-price');
//       const currentTotal = parsePrice(totalElement.textContent);
//       const discountAmount = currentTotal * 0.20;  // Calculate 20% discount
//       const newTotal = currentTotal - discountAmount;


//       updateDOMElement('Discount-price', discountAmount);
//       updateDOMElement('Total-discount-price', newTotal); // Shows final price after discount
//       updateDOMElement('Total-discount-price', newTotal); // Optionally update the total price displayed to the new total

//       // alert('20% discount applied successfully!');
//       this.disabled = true; // Disable further use of coupon
//   } else {
//       // alert('Invalid coupon');
//   }
//   console.log(newTotal);
// });