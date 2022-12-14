import { Fragment, useCallback, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [cartItem, setCartItem] = useState(false);

  const showCartItem = useCallback(() => {
    setCartItem(true);
  }, []);
  const hideCartItem = useCallback(() => {
    setCartItem(false);
  }, []);
  return (
    <Fragment>
      {cartItem && <Cart onHideCart={hideCartItem} />}
      <Header onShowCart={showCartItem} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};
export default App;
