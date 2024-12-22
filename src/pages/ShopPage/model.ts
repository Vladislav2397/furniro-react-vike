import { createStore, sample } from "effector"

import { pageStarted } from "./init"

export const $wasInitialized = createStore(false)

sample({
    clock: pageStarted,
    fn: () => true,
    target: $wasInitialized,
})
