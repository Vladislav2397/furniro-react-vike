import { createEffect, createEvent, sample } from "effector";
import * as cartModel from '~/entities/cart/model'
import { debug } from 'patronum'

const addToCartFx = createEffect(() => {})

export const addToCartClicked = createEvent()

sample({
    clock: addToCartClicked,
    target: addToCartFx,
})
debug({
    addToCartClicked,
    $cart: cartModel.$cart,
})
