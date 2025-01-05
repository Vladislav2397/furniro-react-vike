import { concurrency, createJsonQuery } from "@farfetched/core"
import { arr, num, obj } from "@withease/contracts"

export const getProductListResponseContract = obj({
    list: arr(obj({})),
    total: num,
})

export const getProductListQuery = createJsonQuery({
    request: {
        url: '/api/v1/products',
        method: 'GET',
    },
    response: {
        contract: getProductListResponseContract,
    },
    name: 'get-product-list',
})

getProductListQuery.finished.failure.watch((state) => {
    console.log('getProductListQuery finished', state)
})

concurrency(getProductListQuery, { strategy: "TAKE_LATEST" });
