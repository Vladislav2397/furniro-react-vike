import { createStore } from "effector"
import type { CartItem } from "~/shared/api/types"

export type Cart = {
    items: CartItem[]
}

export const $cart = createStore<Cart>({
    items: [],
})

export function addItemToCart(cart: Cart, item: CartItem) {
    const found = cart.items.find(i => i.id === item.id)

    if (!found) {
        return {
            ...cart,
            items: cart.items.concat(item)
        }
    }

    return {
        ...cart,
        items: cart.items.map(i => i.id === item.id ? {
            ...i,
            quantity: i.quantity + 1
        } : i)
    }
}
