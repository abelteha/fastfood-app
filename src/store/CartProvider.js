import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultValue = {
  items: [],
  totalAmount: 0,
};

const cartRedcuer = (state, action) => {
  if (action.type === "ADD") {
    const totalPrice =
      state.totalAmount + action.item.price * action.item.amount;

    let updatedItem;
    let updatedItems;

    const itemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingItem = state.items[itemIndex];

    if (existingItem) {
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return { items: updatedItems, totalAmount: totalPrice };
  }

  if (action.type === "REMOVE") {
    let updatedItem;
    let updatedItems;
    const itemIndex = state.items.findIndex((item) => item.id === action.id);
    const existingItem = state.items[itemIndex];

    const totalPrice = state.totalAmount - existingItem.price;

    if (existingItem.amount > 1) {
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };

      updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
    } else {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }
    return { items: updatedItems, totalAmount: totalPrice };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartRedcuer, defaultValue);
  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
