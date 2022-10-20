import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [], totalAmount: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.amount += action.payload.amount;
      } else {
        state.items.unshift(action.payload);
      }
      state.totalAmount += action.payload.price * action.payload.amount;
    },
    removeItemFromCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existingItem.amount > 1) {
        existingItem.amount--;
      } else {
        state.items = state.items.filter((item) => item.id !== existingItem.id);
      }
      state.totalAmount -= existingItem.price;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
