import { expect, test } from "@playwright/test"
import { getImagePlaceholder } from './getImagePlaceholder'

const getProductsResponse = {
    list: [
        {
            id: 1,
            name: "Product 1",
            coverUrl: getImagePlaceholder({
                size: "285x300",
            }),
            description: "product description 1",
            price: {
                value: 100,
                currency: "usd",
            },
            oldPrice: {
                value: 200,
                currency: "usd",
            },
        },
        {
            id: 2,
            name: "Product 2",
            coverUrl: getImagePlaceholder({
                size: "285x300",
            }),
            description: "product description 2",
            price: {
                value: 300,
                currency: "usd",
            },
            oldPrice: {
                value: 500,
                currency: "usd",
            },
        },
        {
            id: 3,
            name: "Product 3",
            coverUrl: getImagePlaceholder({
                size: "285x300",
            }),
            description: "product description 3",
            price: {
                value: 200,
                currency: "usd",
            },
            oldPrice: {
                value: 250,
                currency: "usd",
            },
        },
        {
            id: 4,
            name: "Product 4",
            coverUrl: getImagePlaceholder({
                size: "285x300",
            }),
            description: "product description 4",
            price: {
                value: 400,
                currency: "usd",
            },
            oldPrice: {
                value: 450,
                currency: "usd",
            },
        },
        {
            id: 5,
            name: "Product 5",
            coverUrl: getImagePlaceholder({
                size: "285x300",
            }),
            description: "product description 5",
            price: {
                value: 500,
                currency: "usd",
            },
            oldPrice: {
                value: 800,
                currency: "usd",
            },
        },
        {
            id: 6,
            name: "Product 6",
            coverUrl: getImagePlaceholder({
                size: "285x300",
            }),
            description: "product description 6",
            price: {
                value: 400,
                currency: "usd",
            },
            oldPrice: {
                value: 450,
                currency: "usd",
            },
        },
        {
            id: 7,
            name: "Product 7",
            coverUrl: getImagePlaceholder({
                size: "285x300",
            }),
            description: "product description 7",
            price: {
                value: 100,
                currency: "usd",
            },
            oldPrice: {
                value: 250,
                currency: "usd",
            },
        },
    ],
    total: 7,
}

test.describe("main page", () => {
    test("Default screenshot", async ({ page }) => {
        await page.route('*/**/rest-api/v1/products', async route => {
            const json = getProductsResponse
            await route.fulfill({ json })
        })

        await page.goto("http://localhost:5173/")

        await expect(page).toHaveScreenshot({ fullPage: true })
    })
})
