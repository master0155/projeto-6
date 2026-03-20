import { configureStore } from "@reduxjs/toolkit";
import carrinhoReducer from "./reducers/carrinhoReducer";
import productsReducer from "./reducers/productsReducer";
import api from "../services/api";
  

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    products: productsReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
