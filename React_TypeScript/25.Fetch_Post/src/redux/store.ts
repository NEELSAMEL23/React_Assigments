// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducer";

export const store = configureStore({
  reducer: postReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
