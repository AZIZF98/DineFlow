import React from "react";
import FoodMenu from "./pages/FoodMenu";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <>
      <CartProvider>
        <FoodMenu />
      </CartProvider>
    </>
  );
};

export default App;
