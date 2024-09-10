import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  // cart: {
  //   menuId: 1,
  //   name: 'Ayam Betutu (1/4 ekor)',
  //   quantity: 2,
  //   unitPrice: 40000,
  //   totalPrice: 80000,
  // },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = menuId
      state.cart = state.cart.filter((item) => item.menuId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.menuId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.menuId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export const getTotalQuantity = (state) =>
  state.cart.cart.reduce((acc, curr) => acc + curr.quantity, 0);
export const getTotalPrice = (state) =>
  state.cart.cart.reduce((acc, curr) => acc + curr.totalPrice, 0);
export const getCart = (state) => state.cart.cart;
export const getCartUsername = (state) => state.user.username;
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.menuId === id)?.quantity ?? 0;
export default cartSlice.reducer;
