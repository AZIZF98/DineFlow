import React from "react";
import FoodMenu from "./pages/FoodMenu";
import { CartProvider } from "./context/CartContext";
import LoginPage from "./pages/LoginPage";
import { Provider } from "react-redux";
import store from "./store/Auth-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router.jsx";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </Provider>
    </>
  );
};

export default App;
