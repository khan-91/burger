// store.js
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

export const store = configureStore({
  reducer, // your root reducer
});
