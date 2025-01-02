import { createJsonQuery } from '@farfetched/core'
import { obj } from '@withease/contracts'

export type CartItem = {
    id: number
    name: string
    price: Amount
    oldPrice: Amount
    quantity: number
}

export type Cart = {
    items: CartItem[]
}

const getCartResponseContract = obj({})

export const getCartQuery = createJsonQuery({
    request: {
        url: '/api/v1/cart',
        method: 'GET',
    },
    response: {
        contract: getCartResponseContract,
    }
})
