import {createBrowserRouter} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import FoodMenu from "../pages/FoodMenu";
import SignUpPage from "../pages/SignUpPage.jsx";

export const router = createBrowserRouter([
    {path: "/", element: <LoginPage/>},
    {path: "/FoodMenu", element: <FoodMenu/>},
    {path: "/register", element: <SignUpPage/>},
]);
