import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Plate } from "../../models/plate";

type CarrinhoState = {
  items: Plate[]
}

const initialState: CarrinhoState = {
  items: [],
}

const carrinhoReducer = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Plate>)=>{
      const plate = action.payload
      if(state.items.find(plate => plate.id === action.payload.id)){
        alert("este itrem já está no carrinho"!);
      }else{
        state.items.push(plate);
      }
    },
    remover: (state, action: PayloadAction<Plate>) => {
      const ok = confirm("Deseja mesmo remover este item do carrinho?")
      if(ok){
        const plateId = action.payload.id
        state.items = state.items.filter(item => item.id !== plateId)
      }
    }
  }
})

export const {adicionar, remover} = carrinhoReducer.actions;
export default carrinhoReducer.reducer
