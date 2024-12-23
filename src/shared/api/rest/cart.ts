import { createJsonQuery } from '@farfetched/core'
import {obj} from '@withease/contracts'

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
