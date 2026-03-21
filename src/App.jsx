import React from "react";
import FoodMenu from "./pages/FoodMenu";
import { CartProvider } from "./context/CartContext";
import LoginPage from "./pages/LoginPage";
import { Provider } from "react-redux";
import store from "./store/Auth-redux";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <CartProvider>
          <LoginPage />
          {/* <FoodMenu /> */}
        </CartProvider>
      </Provider>
    </>
  );
};

export default App;
