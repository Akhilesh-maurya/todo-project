import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slice/todoSlice";

const store = configureStore({
  reducer: {
    data: todoReducer,
  },
});

export default store;
