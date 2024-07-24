import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/usersSlice";
import optionsReducer from "../features/options/optionsSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    options: optionsReducer,
  },
});

export default store;
