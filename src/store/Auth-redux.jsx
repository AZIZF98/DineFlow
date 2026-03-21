import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialLoginState = { userName: "", password: "", isLoggedIn: false };

const authSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    setUsername(state, action) {
      state.userName = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    login(state) {
      state.isLoggedIn = true;
    },
  },
});

const store = configureStore({
  reducer: { auth: authSlice.reducer },
});

export const authActions = authSlice.actions;

export default store;
