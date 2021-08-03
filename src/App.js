import React, { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Cart from "./Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <MainContent></MainContent>
    </CartProvider>
  );
}

export default App;
