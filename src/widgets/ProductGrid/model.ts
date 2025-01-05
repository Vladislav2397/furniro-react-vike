import { createStore, sample } from "effector"
import { getProductListQuery } from "~/shared/api/queries/product"

export const $products = createStore<any[]>([])

sample({
    clock: getProductListQuery.finished.success,
    fn: ({ result }) => result.list,
    target: $products,
})
