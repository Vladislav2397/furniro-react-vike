import * as cartModel from '~/entities/cart/model';
import { createEffect, createEvent, sample } from "effector";
import { debug } from "patronum"
import type { CartItem } from '~/shared/api/types';

type Product = any

const addToCartFx = createEffect((item: any): CartItem => {
    return {
        id: item.id,
        name: item.name,
        price: item.price,
        oldPrice: item.oldPrice,
        quantity: 1,
    }
})

export const addToCartClicked = createEvent<Product>()

sample({
    clock: addToCartClicked,
    target: addToCartFx,
})
sample({
    clock: addToCartFx.doneData,
    source: cartModel.$cart,
    fn: cartModel.addItemToCart,
    target: cartModel.$cart,
})
debug({
    addToCartClicked,
    $cart: cartModel.$cart,
})
