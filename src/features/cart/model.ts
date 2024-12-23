import { createEffect, createEvent, sample } from "effector";
import { debug } from 'patronum'
import * as cartModel from '~/entities/cart/model'

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
