import {configureStore} from "@reduxjs/toolkit";
import orderReducer from "./orderSlice";
import authReducer from "./Auth-redux.jsx";

const store = configureStore(
    {
        reducer:
            {
                orders: orderReducer,
                auth: authReducer
            }
    }
);

export default store;
