import { cache, concurrency, createQuery } from "@farfetched/core"
import { arr, num, obj } from "@withease/contracts"

export const getProductListResponseContract = obj({
    list: arr(obj({})),
    total: num,
})

export const getProductListQuery = createQuery({
    handler: async () => {
        const response = await fetch('/rest-api/v1/products')

        const data = await response.json()

        if (!getProductListResponseContract.isData(data)) {
            throw new Error('Invalid response')
        }

        return data
    },
    name: 'get-product-list',
})

concurrency(getProductListQuery, { strategy: "TAKE_LATEST" });
cache(getProductListQuery, { staleAfter: '10min' })
