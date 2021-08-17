// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceValue = price.innerText;
  const quantityValue = quantity.value;
  const subtotalValue = priceValue * quantityValue;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = subtotalValue;
  return subtotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  const allProductsArray = [...allProducts];
  allProductsArray.forEach((product) => {
    updateSubtotal(product);
  });

  // ITERATION 3
  const total = document.querySelector('#total-value span');
  let totalValue = 0;
  allProductsArray.forEach((product) => {
    totalValue += updateSubtotal(product);
  });
  total.innerText = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentElement.parentElement.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const allRemoveBtn = document.querySelectorAll('.btn-remove');
  console.log(allRemoveBtn);
  const allRemoveBtnArray = [...allRemoveBtn];
  allRemoveBtnArray.forEach((removeBtn) => {
    removeBtn.addEventListener('click', removeProduct);
  });
});
