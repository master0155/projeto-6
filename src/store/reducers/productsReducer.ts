import { createSlice } from "@reduxjs/toolkit";
import { Plate } from "../../models/plate";

type ProductState = {
  items: Plate[]
}

const initialState: ProductState = {
  items: [
    {
      id: 1,
      image: 'https://beniniedonato.com.br/wp-content/uploads/2022/04/bife-florentino.jpg',
      title: 'Bife à Fiorentina',
      description: `
        Um corte alto de filé mignon grelhado à perfeição, temperado apenas com sal e pimenta. Um clássico da Toscana.
          `,
      value: 69.89
    },
    {
      id: 2,
      image: 'https://ogimg.infoglobo.com.br/in/22111928-630-f16/FT1086A/760/FiammettaSpaghetti-Negro-Tinta-de-LulaCredito-Rodrig-Azevedo-3.jpeg.jpg',
      title: 'Espaguete com tinta de lula',
      description: `
        Espaguete negro cozido e envolvido em um molho saboroso feito com tinta de lula, frutos do mar e tomate. Um prato elegante e delicioso.
          `,
      value: 38.89
    },
    {
      id: 3,
      image: 'https://img.freepik.com/fotos-premium/risoto-com-tinta-de-lula-e-lula-amassada_136960-196.jpg',
      title: 'Risoto com tinta de lula',
      description: `
        Arroz cremoso cozido com tinta de lula, caldo de frutos do mar e queijo parmesão. Uma alternativa saborosa ao risoto tradicional.
          `,
      value: 59.99
    },
    {
      id: 4,
      image: 'https://www.recetin.com/wp-content/uploads/2021/10/mas-modi-8-min.jpg',
      title: 'Sépia com ervilhas',
      description: `
        Sépia cozida em um molho de tomate com ervilhas, cebola e alho. Um prato simples e saboroso.
          `,
      value: 28.89
    },
    {
      id: 5,
      image: 'https://revistamenu.com.br/wp-content/uploads/sites/24/2020/03/kiaora_lula-1.jpg',
      title: 'Lulas fritas',
      description: `
        Lulas empanadas e fritas até dourar. Um aperitivo popular ou acompanhamento para outros pratos.
          `,
      value: 19.89
    },
    {
      id: 6,
      image: 'https://s2.glbimg.com/QlcUlR-Auf0vPooPkkqbvfBll9Y=/e.glbimg.com/og/ed/f/original/2018/04/04/receita-de-polvo-grelhado-com-pure-de-batata-rustico.jpg',
      title: 'Polvo grelhado',
      description: `
        Polvo marinado e grelhado até ficar macio e saboroso. Um prato perfeito para o verão.
          `,
      value: 79.89
    },
  ],
}

const productReducer = createSlice({
  name: "products",
  initialState,
  reducers: {}
})

export default productReducer.reducer
