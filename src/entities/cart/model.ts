import { createStore } from "effector"

type CartItem = {
    id: number
    name: string
    price: Amount
    oldPrice: Amount
}

export type Cart = {
    items: CartItem[]
}

export const $cart = createStore<Cart>({
    items: [],
})
