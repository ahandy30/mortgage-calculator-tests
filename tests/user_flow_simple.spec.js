import { test } from "@playwright/test"
import { CalculatorPage } from "../page-objects/CalculatorPage"

/* Going through calculator to see monthly payment amount for:
home price: $500,000, 20% down payment, loan period: 15 year fixed
interest rate of 4.25 */
test("User flow simple options", async ({ page }) => {
    const calcPage = new CalculatorPage(page)

    await page.goto("https://www.zillow.com/mortgage-calculator/")
    await calcPage.getTitle()
    await calcPage.inputHomePrice("500000")
    await calcPage.inputloanPeriod("15 year fixed")
    await calcPage.inputIntRate("4.25")
    await calcPage.viewMonthlyPay()
})

/* Changing interest rate from 4.25 to 5 will see an 
increase in monthly payment */
test("Changing interest rate", async ({ page }) => { 
    const calcPage = new CalculatorPage(page)

    await page.goto("https://www.zillow.com/mortgage-calculator/")
    await calcPage.getTitle()
    await calcPage.inputHomePrice("500000")
    await calcPage.inputloanPeriod("15 year fixed")
    await calcPage.inputIntRate("4.25")
    await calcPage.viewMonthlyPay()
    await calcPage.viewNewMonthlyPay()
})
