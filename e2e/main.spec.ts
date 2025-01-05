import { expect, test } from "@playwright/test";

test.describe('main page', () => {
    test("Default screenshot", async ({ page }) => {
        await page.goto("http://localhost:5173/")

        await expect(page).toHaveScreenshot({ fullPage: true })
    })
})
