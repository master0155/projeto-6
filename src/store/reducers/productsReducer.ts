import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Plate } from "../../models/plate";

type ProductState = {
  items: Plate[]
}

const initialState: ProductState = {
  items: []
}

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Plate[]>) {
      state.items = action.payload
    }
  }
})

export const { setItems } = productSlice.actions

export default productSlice.reducer
