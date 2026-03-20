import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type CardapioItemApi = {
    id: number
    foto: string
    nome: string
    descricao: string
    preco: number
}

export type RestaurantApi = {
    id: number
    tipo: string
    capa: string
    titulo: string
    avaliacao: number
    descricao: string
    cardapio: CardapioItemApi[]
}

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api-ebac.vercel.app/api/efood' }),
    endpoints: (builder) => ({
        getRestaurantes: builder.query<RestaurantApi[], void>({
            query: () => '/restaurantes'
        }),
        getOnSale: builder.query<RestaurantApi[], void>({
            query: () => '/restaurantes?destacado=true'
        }),
        getRestauranteByTipo: builder.query<RestaurantApi[], string>({
            query: (tipo) => `/restaurantes?tipo=${tipo}`
        })
    })
})

export const {
    useGetRestaurantesQuery,
    useGetOnSaleQuery,
    useGetRestauranteByTipoQuery
} = api

export default api