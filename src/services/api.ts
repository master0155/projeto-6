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

export type CheckoutPayload = {
    products: Array<{
        id: number
        price: number
    }>
    delivery: {
        receiver: string
        address: {
            description: string
            city: string
            zipCode: string
            number: number
            complement?: string
        }
    }
    payment: {
        card: {
            name: string
            number: string
            code: number
            expires: {
                month: number
                year: number
            }
        }
    }
}

export type CheckoutResponse = {
    orderId: string
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
        }),
        checkout: builder.mutation<CheckoutResponse, CheckoutPayload>({
            query: (body) => ({
                url: '/checkout',
                method: 'POST',
                body
            })
        })
    })
})

export const {
    useGetRestaurantesQuery,
    useGetOnSaleQuery,
    useGetRestauranteByTipoQuery,
    useCheckoutMutation
} = api

export default api