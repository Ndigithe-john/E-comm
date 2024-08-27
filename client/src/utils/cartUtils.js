export const addDecimals = (num) => num.toFixed(2);

export const updateCart = (state) => {
  state.itemsPrice = addDecimals(
    state.cartItems.reduce(
      (acc, currVal) => acc + currVal.price * currVal.qty,
      0,
    ),
  );

  //calculate shipping price
  state.shippingPrice = addDecimals(+state.itemsPrice > 5000 ? 0 : 3000);

  // Calculatte tax price
  state.taxPrice = addDecimals(0.18 * +state.itemsPrice);

  //calculate the total price
  state.totalPrice = addDecimals(
    +state.itemsPrice + +state.shippingPrice + +state.taxPrice,
  );

  localStorage.setItem('cart', JSON.stringify(state));

  return state;
};
