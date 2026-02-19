import { configureStore } from "@reduxjs/toolkit";
import carrinhoReducer from "./reducers/carrinhoReducer";
import productsReducer from "./reducers/productsReducer";

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    products: productsReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
