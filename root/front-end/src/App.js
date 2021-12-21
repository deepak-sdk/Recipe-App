import React, { useState } from "react";
import "./App.css";
import { Recipe } from "./components/Recipe/Recipe";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from './context/CartProvider';

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
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Recipe />
      </main>
    </CartProvider>
  );
}

export default App;
