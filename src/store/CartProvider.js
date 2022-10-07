import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemHandler = () => {};
  const removeItemHandler = () => {};
  const cartItems = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider
      value={{
        items: cartItems.items,
        totalAmount: cartItems.totalAmount,
        addItem: cartItems.addItem,
        removeItem: cartItems.removeItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
