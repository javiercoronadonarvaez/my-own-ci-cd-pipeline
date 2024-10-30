const { test, describe, expect } = require('@playwright/test')

describe('Front Page', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Jorge Montes')).toBeVisible()
    await expect(page.getByText('Javier Coronado')).toBeVisible()
  })
})
