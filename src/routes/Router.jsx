import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import FoodMenu from "../pages/FoodMenu";

export const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/FoodMenu", element: <FoodMenu /> },
]);
