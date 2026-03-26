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
    },
    limpar: (state) => {
      state.items = []
    }
  }
})

export const {adicionar, remover, limpar} = carrinhoReducer.actions;
export default carrinhoReducer.reducer
