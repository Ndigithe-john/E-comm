import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [] };

const addDecimals = (num) => num.toFixed(2);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem._id === item._id,
      );
      if (existingItem) {
        state.cartItems = state.cartItems.map((cartItem) => {
          return cartItem._id === existingItem._id ? item : cartItem;
        });
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      //Calculate the total price of the items

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
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
