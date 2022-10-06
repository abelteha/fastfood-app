import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartItem, setCartItem] = useState(false);

  const showCartItem = () => {
    setCartItem(true);
  };
  const hideCartItem = () => {
    setCartItem(false);
  };
  return (
    <CartProvider>
      {cartItem && <Cart onHideCart={hideCartItem} />}
      <Header onShowCart={showCartItem} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};
export default App;
